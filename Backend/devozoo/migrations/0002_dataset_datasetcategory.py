# Generated by Django 2.2.10 on 2020-04-15 10:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('devozoo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DatasetCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
            ],
            options={
                'verbose_name_plural': 'Dataset Categories',
            },
        ),
        migrations.CreateModel(
            name='Dataset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('link', models.URLField(max_length=250)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Dataset', to='devozoo.DatasetCategory', verbose_name='Category')),
            ],
            options={
                'verbose_name_plural': 'Datasets',
            },
        ),
    ]
