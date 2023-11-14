from rest_framework import viewsets
from .models import Donante
from .serializers import DonanteSerializer


class DonanteViewSet(viewsets.ModelViewSet):
    queryset = Donante.objects.all()
    serializer_class = DonanteSerializer

