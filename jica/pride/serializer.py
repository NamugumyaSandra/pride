# from django.contrib.auth.models import User,Group
from rest_framework import serializers
from .models import Officer,Farmer,Season,Report,District,Subcounty,Parish

class OfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Officer
        fields = '__all__'

class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = ['id','officer','parish','village','gender','birth_year','username','marriage','language','phone','profile_photo','community_status','instructor_possibility','farm_area','crop_type','past_harvests']

    #     gender = serializers.CharField(source='get_gender_display')
    #     marriage = serializers.CharField(source='get_marriage_display')
    #     language = serializers.CharField(source='get_language_display')
    #     community_status = serializers.CharField(source='get_community_status_display')
    #     instructor_possibility = serializers.BooleanField(source='get_instructor_possibility_display')
    #     farm_area = serializers.CharField(source='get_farm_area_display')
    #     crop_type = serializers.CharField(source='get_crop_type_display')

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'

class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'
