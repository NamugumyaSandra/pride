from django.db import models
from phone_field import PhoneField

# Create your models here.

class District(models.Model):
    district = models.CharField(max_length=150)

    def __str__(self):
        return self.district

class Subcounty(models.Model):
    subcounty = models.CharField(max_length=150)
    district = models.ForeignKey(District,on_delete=models.SET_DEFAULT,default=1)

    def __str__(self):
        return self.subcounty


class Parish(models.Model):
    parish = models.CharField(max_length=150)
    subcounty = models.ForeignKey(Subcounty,on_delete=models.SET_DEFAULT,default=1)

    def __str__(self):
        return self.parish


class Village(models.Model):
    village = models.CharField(max_length=200)
    parish= models.ForeignKey(Parish,on_delete=models.SET_DEFAULT,default=1)

    def __str__(self):
        return self.village


class Season(models.Model):
    season = models.CharField(max_length=200)
    area_acres = models.FloatField()
    harvest_kgs = models.FloatField()

    def __str__(self):
        return self.season


class Officer(models.Model):
    username = models.CharField(max_length=200)
    LoginID = models.CharField(max_length=100)
    password = models.CharField(max_length=200)
    district_id = models.ForeignKey(District,on_delete=models.CASCADE,default=1)
    subcounty_id = models.ForeignKey(Subcounty,on_delete=models.CASCADE,default=1)
    phone = PhoneField(blank=True, help_text='Contact phone number')

    def __str__(self):
        return self.username


class Farmer(models.Model):
    district_id = models.ForeignKey(District,on_delete=models.CASCADE)
    subcounty_id = models.ForeignKey(Subcounty,on_delete=models.CASCADE)
    parish = models.ForeignKey(Parish,on_delete=models.CASCADE)
    village = models.ForeignKey(Village,on_delete=models.CASCADE)
    gender = models.CharField(max_length=20)
    birth_year = models.DateField()
    username = models.CharField(max_length=200)
    marriage = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    phone = PhoneField(blank=True, help_text='Contact phone number')
    profile_photo = models.FileField()
    community_status = models.CharField(max_length=150)
    instructor_possibility = models.BooleanField()
    farm_area = models.CharField(max_length=100)
    crop_type = models.CharField(max_length=100)
    past_harvests =  models.ForeignKey(Season,on_delete=models.CASCADE)

    def __str__(self):
        return self.username


class Report(models.Model):
    farm_area = models.ForeignKey(Farmer,on_delete=models.CASCADE)   
    rice_type = models.CharField(max_length=100)
    sowing_date = models.DateField()
    sowing_type = models.CharField(max_length=100)
    planting_type = models.CharField(max_length=100)
    levelling = models.CharField(max_length=100)
    ridge = models.CharField(max_length=100)
    watercourse_state = models.CharField(max_length=100)
    fertilizer = models.BooleanField()
    fertilizer_1_type = models.CharField(max_length=100)
    fertilizer_1_amount = models.IntegerField()
    fertilizer_2_type = models.CharField(max_length=100)
    fertilizer_2_amount = models.IntegerField()
    weed_condition = models.CharField(max_length=100)
    total_weed_times = models.IntegerField()
    harvest_date = models.DateField()
    harvest_amount = models.ForeignKey(Season,on_delete=models.CASCADE)
    note = models.CharField(max_length=500)
    photo1 = models.FileField()
    photo2 = models.FileField()
    photo3 = models.FileField()
    photo4 = models.FileField()

    def __str__(self):
        return self.rice_type
