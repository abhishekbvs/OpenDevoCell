# Generated by Django 2.2.10 on 2020-04-15 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('devozoo', '0002_dataset_datasetcategory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dataset',
            name='category',
        ),
        migrations.AddField(
            model_name='dataset',
            name='category',
            field=models.ManyToManyField(related_name='Dataset', to='devozoo.DatasetCategory', verbose_name='Category'),
        ),
    ]
