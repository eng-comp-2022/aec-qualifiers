from json.encoder import JSONEncoder
from django.core.serializers.json import DjangoJSONEncoder
from django.http import JsonResponse as JsonResponseSuper

class JsonEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if callable(getattr(obj, "toJSON", None)):
            return obj.toJSON()
        return super(obj)

class ToJsonEncoder(DjangoJSONEncoder):
    def toJSON(self):
        return vars(self)

def JsonResponse(obj, encoder = JsonEncoder):
    return JsonResponseSuper(obj, encoder=encoder)
