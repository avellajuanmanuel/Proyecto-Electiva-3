from rest_framework import serializers
from .models import Donante

class DonanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donante
        fields = ['ID_Donante', 'Nombre', 'Apellido', 'Dirección', 'Ciudad', 'Teléfono', ]#'Correo_Electrónico'
