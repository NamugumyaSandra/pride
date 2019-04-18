from django.shortcuts import render
from .serializer import FarmerSerializer,OfficerSerializer,ReportSerializer,SeasonSerializer
from rest_framework import viewsets
from .models import Officer,Farmer,Report,Season
# from rest_framework.permissions import AllowAny, ReadOnly

# Create your views here.

class OfficerView(viewsets.ModelViewSet):
    queryset = Officer.objects.all()
    serializer_class = OfficerSerializer
    # permission_classes = (AllowAny)

class FarmerView(viewsets.ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer
    # permission_classes = (AllowAny,ReadOnly)


class ReportView(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class SeasonView(viewsets.ModelViewSet):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer

def home(request):
    return render(request,'pride/home.html')