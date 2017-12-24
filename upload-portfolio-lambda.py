import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    # Create local object variables
    s3 = boto3.resource('s3')
    portfolio_bucket = s3.Bucket('portfolio.kirkferguson.info')
    build_bucket = s3.Bucket('portfoliobuild.kirkferguson.info')
    portfolio_zip = StringIO.StringIO()

    # Grab the zip file CodeBuild created from GitHub
    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

    # For each file in the zip, move the file to the PRD s3 bucket and grant
    # public read priviledge
    with zipfile.ZipFile(portfolio_zip) as myzip:
      for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfolio_bucket.upload_fileobj(obj, nm,
          ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

    print 'Files moved from build bucket to PRD.'

    return 'Success.'
