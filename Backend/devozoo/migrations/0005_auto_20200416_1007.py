# Generated by Django 2.2.10 on 2020-04-16 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('devozoo', '0004_auto_20200415_1038'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='datasetcategory',
            options={'verbose_name_plural': 'Categories'},
        ),
        migrations.AddField(
            model_name='dataset',
            name='description',
            field=models.CharField(blank=True, max_length=350, null=True),
        ),
        migrations.AddField(
            model_name='datasetcategory',
            name='description',
            field=models.CharField(blank=True, max_length=350, null=True),
        ),
    ]
