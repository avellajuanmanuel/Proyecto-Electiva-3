

from django.urls import path, include
from rest_framework import routers
from Donaciones import views
router = routers.DefaultRouter()
router.register(r'Donaciones', views.DonacionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]