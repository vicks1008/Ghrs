# Generated by Django 2.1.1 on 2018-09-29 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_image_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='product',
            name='productRating',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]
