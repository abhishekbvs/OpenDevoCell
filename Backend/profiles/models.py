from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.


class Profile(models.Model):
    
    def get_profile_pic_path(self, filename):
        ext = filename.split('.')[-1]
        filename = "%s.%s" % (uuid.uuid4(), ext)
        return 'static/uploads/images/profile_pic/' + filename

    user = models.OneToOneField(
                User, on_delete=models.CASCADE,
                related_name='Profile',
                verbose_name='User',
    )
    phone = models.CharField(max_length=12, blank=True, null=True)
    profile_pic = models.ImageField(upload_to=get_profile_pic_path, null=True, blank=True)

    def __str__(self):
        return self.user.username