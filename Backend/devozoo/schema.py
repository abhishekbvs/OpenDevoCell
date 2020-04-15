import graphene

from devozoo.models import Dataset

class DatasetObj(graphene.ObjectType):
    name = graphene.String()
    link = graphene.String()
    

class Query(graphene.ObjectType):
    listdatasets = graphene.List(DatasetObj) 