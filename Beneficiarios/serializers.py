from rest_framework import serializers
from .models import Beneficiario

class BeneficiarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beneficiario
        fields = ['ID_Beneficiario', 'Nombre', 'Apellido', 'Dirección', 'Ciudad', 'Teléfono', 'Correo_Electrónico', 'Nivel_de_Pobreza']
