from django.db import models

class Beneficiario(models.Model):
    ID_Beneficiario = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=100)
    Apellido = models.CharField(max_length=100)
    Dirección = models.CharField(max_length=200)
    Ciudad = models.CharField(max_length=100)
    Teléfono = models.CharField(max_length=20)
    Nivel_de_Pobreza = models.CharField(max_length=10, choices=[('bajo', 'Bajo'), ('medio', 'Medio'), ('alto', 'Alto')])
    Correo_Electrónico = models.EmailField(max_length=254, null= True) 

    def __str__(self):
        return f"{self.Nombre} {self.Apellido}"
