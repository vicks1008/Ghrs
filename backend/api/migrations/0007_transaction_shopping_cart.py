# Generated by Django 2.1.1 on 2018-10-05 17:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    atomic = False
    dependencies = [
        ('api', '0006_auto_20181005_1712'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='shopping_cart',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='api.Shopping_cart'),
        ),
    ]