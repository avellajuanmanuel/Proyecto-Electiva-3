from django.urls import path, include
from rest_framework import routers
from Donantes import views
router = routers.DefaultRouter()
router.register(r'Donantes', views.DonanteViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]