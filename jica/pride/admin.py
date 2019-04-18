from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from django.db import models
from pride.models import Officer,Farmer,Report,Season,District,Subcounty,Parish

# Register your models here.
@admin.register(Officer)
class OfficerAdmin(admin.ModelAdmin):
    list_display = ('username', 'LoginID', 'password', 'district_id', 'subcounty_id', 'phone')

@admin.register(Farmer)
class FarmerAdmin(ImportExportModelAdmin):
    pass
    # list_display = (Officer,parish,village,gender,birth_year,username,marriage,language,phone,profile_photo,community_status,instructor_possibility,farm_area,crop_type,past_harvests
@admin.register(Report)
class ReportAdmin(ImportExportModelAdmin):
    pass

@admin.register(Season)
class SeasonAdmin(admin.ModelAdmin):
    list_display = ('season', 'id')

admin.site.site_header = 'PRiDe'
