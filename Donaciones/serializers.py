
from rest_framework import serializers
from .models import Donacion

class DonacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donacion
        fields = ['ID_Donacion', 'Fecha', 'Tipo_de_Donacion', 'Cantidad']
