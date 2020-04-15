from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class Video(models.Model):
    def get_file_path(self, filename):
        return 'uploads/devozoo/videos/o' + filename
    name = models.CharField(max_length=20, null=True, blank=True)
    video_file =  models.FileField(upload_to=get_file_path)
    file_id =  models.CharField(max_length=50)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE,
    )
    date = models.DateTimeField(verbose_name="Uploaded time", default=timezone.now, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Videos"

    def __str__(self):
        return self.name+' (id: '+self.file_id+')'

class DatasetCategory(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Dataset(models.Model):
    name = models.CharField(max_length=50)
    link = models.URLField(max_length=250)
    category = models.ForeignKey(DatasetCategory, on_delete=models.CASCADE, verbose_name='Category', related_name='Dataset')

    class Meta:
        verbose_name_plural = "Datasets"

    def __str__(self):
        return self.name
