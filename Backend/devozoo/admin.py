from django.contrib import admin
from .models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin, ExportActionMixin
# Register your models here.

class VideoResource(resources.ModelResource):

    class Meta:
        model = Video

@admin.register(Video)
class DevoZooVideo(ImportExportModelAdmin, ExportActionMixin, admin.ModelAdmin):
    fields = [('name', 'user'), ('file_id', 'video_file'), 'date']

    list_display = ('name','file_id', 'user', 'date',)


@admin.register(Dataset)
class DatasetAdmin(ImportExportModelAdmin, ExportActionMixin, admin.ModelAdmin):
    fields = [('name', 'category'), 'link', 'description']

    list_display = ('name','category',)

@admin.register(DatasetCategory)
class DatasetCategoryAdmin(ImportExportModelAdmin, ExportActionMixin, admin.ModelAdmin):
    fields = ['name', 'description']
    list_display = ('name',)


