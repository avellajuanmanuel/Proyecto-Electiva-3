from django.urls import path, include
from rest_framework import routers
from Beneficiarios import views

router = routers.DefaultRouter()
router.register(r'Beneficiarios', views.BeneficiarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]