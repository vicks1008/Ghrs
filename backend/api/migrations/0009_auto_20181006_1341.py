# Generated by Django 2.1.1 on 2018-10-06 13:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    atomic = False
    dependencies = [
        ('api', '0008_auto_20181005_1817'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='shoppingcart',
            field=models.ForeignKey(blank=True, default='0000000', editable=False, on_delete=django.db.models.deletion.CASCADE, to='api.Shoppingcart'),
        ),
    ]
