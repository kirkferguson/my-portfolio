import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    # Create local object variables
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-west-2:747096364018:deployPortfolioTopic')

    location = {
      'bucketName': 'portfoliobuild.kirkferguson.info',
      'objectKey': 'portfoliobuild.zip'
    }
    try:
      job = event.get('CodePipeline.job')

      if job:
        for artifact in job['data']['inputArtifacts']:
          if artifact['name'] == 'MyAppBuild':
            location = artifact['location']['s3Location']

      print 'Building portfolio from ' + str(location)

      s3 = boto3.resource('s3')
      portfolio_bucket = s3.Bucket('portfolio.kirkferguson.info')
      build_bucket = s3.Bucket(location['bucketName'])
      portfolio_zip = StringIO.StringIO()

      # Grab the zip file CodeBuild created from GitHub
      build_bucket.download_fileobj(location['objectKey'], portfolio_zip)

      # For each file in the zip, move the file to the PRD s3 bucket and grant
      # public read priviledge
      with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
          obj = myzip.open(nm)
          portfolio_bucket.upload_fileobj(obj, nm,
            ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
          portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

      print 'Files moved from build bucket to PRD.'
      topic.publish(Subject='Files Deployed to Portfolio', Message='Success.')

      if job:
        codepipeline = boto3.client('codepipeline')
        codepipeline.put_job_success_result(jobId=job['id'])
    except:
      topic.publish(Subject='Files Failed to Deploy to Portfolio', Message='Failed.')
      raise

    return 'Lambda execution complete.'
