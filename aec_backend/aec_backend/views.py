from django.core.serializers.json import DjangoJSONEncoder
from django.http import JsonResponse as JsonResponseSuper

import json


class JsonEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if callable(getattr(obj, "toJSON", None)):
            return obj.toJSON()
        return super(obj)


def JsonResponse(obj):
    return JsonResponseSuper(obj, encoder=JsonEncoder)


class Article(DjangoJSONEncoder):
    id = 4
    title = "this is data from python:"
    body = "data from python"
    date = "more data from python"

    def toJSON(self):
        return {"id": 44, "title": self.title, "body": self.body, "date": self.date}


def articles(request):
    print("DOING STUFFFFF")
    articles = [Article()]
    context = {"articles": articles}
    resp = JsonResponse(context)
    print("reponse", resp.content)
    return resp
