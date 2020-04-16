import graphene

from devozoo.models import Dataset,DatasetCategory

class DatasetObj(graphene.ObjectType):
    name = graphene.String()
    description = graphene.String()
    link = graphene.String()

class CategoryListObj(graphene.ObjectType):
    name = graphene.String()

class CategoryObj(graphene.ObjectType):
    name = graphene.String()
    description = graphene.String()
    datasets = graphene.List(DatasetObj)

    def resolve_datasets(self, info):
        return Dataset.objects.filter(category=self).distinct()

class Query(graphene.ObjectType):
    
    listByCategory = graphene.List(CategoryObj)

    @staticmethod
    def resolve_listByCategory(self, info, **kwargs):
        return DatasetCategory.objects.all().order_by('name')