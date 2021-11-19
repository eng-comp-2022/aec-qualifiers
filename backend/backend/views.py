from . import aec_json

class Article(aec_json.ToJsonEncoder):
    def __init__(self):
        self.id = 4
        self.title = "this is data from python:"
        self.body = "data from python"
        self.date = "more data from python"


def articles(request):
    articles = [Article()]
    context = {"articles": articles}
    resp = aec_json.JsonResponse(context)
    print("reponse", resp.content)
    return resp
