import csv
from pride.models import District,Subcounty,Parish

"""
    Script to import data from .csv file to Model Database DJango
    To execute this script run: 
                                1) manage.py shell
                                2) exec(open('file_name.py').read())
"""

def main():
    reader = csv.reader(open('./place.csv')) 
    next(reader)
    for d,s,p in reader:
        # check the database first if instance exists don't create else new instance
        district, created = District.objects.get_or_create(district=d)
        subcounty, created = Subcounty.objects.get_or_create(subcounty=s,district=district)
        parish = Parish.objects.create(parish=p,subcounty=subcounty)
        print('Intance created')
    return 'Completed'
main()
print('tables created')

# from location import main