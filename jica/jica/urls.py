
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from pride import views


router = routers.DefaultRouter()
router.register('officers',views.OfficerView,'officer')
router.register('farmers',views.FarmerView,'farmer')
router.register('reports',views.ReportView,'report')
router.register('seasons',views.SeasonView,'season')


urlpatterns = [
    path('',views.home, name='home'),
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)),
    # path('api-auth/', include('rest_framework.urls')),
]
