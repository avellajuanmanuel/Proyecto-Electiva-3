# Generated by Django 4.2.6 on 2023-10-27 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Donacion',
            fields=[
                ('ID_Donacion', models.AutoField(primary_key=True, serialize=False)),
                ('Fecha', models.DateField()),
                ('Tipo_de_Donacion', models.CharField(max_length=50)),
                ('Cantidad', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]