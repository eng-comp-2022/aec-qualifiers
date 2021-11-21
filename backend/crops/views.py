from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from django.http import JsonResponse

from crops import models
from crops.families import Families as fams

from django.views.decorators.csrf import csrf_exempt


# brassacas follow legumes
# potatoes follow brissiacas
# potatoes avoid beside brissacas
# umbrelfara shouldn't follow legumes
# parsnip follow brisacas (and other demanding veggies)
crop_rules = {
    fams.brassicas.name: {
        "follow": [fams.legumes],
    },
    fams.solanaceae.name: {"follow": [fams.brassicas], "avoid": [fams.brassicas]},
    fams.umbreliferae.name: {"follow": [fams.brassicas], "no_follow": [fams.legumes]},
}


@csrf_exempt
def store_plot(request):
    import json

    if request.method == "POST":
        body = json.loads(request.body.decode("utf-8"))

        plot = models.Plot()
        plot.year = body["year"]
        plot.width = body["width"]
        plot.height = body["height"]
        plot.grid = body["grid"]

        plot.save()

        return HttpResponse(status=200)

    return HttpResponse(status=405)


@csrf_exempt
def query_plot_layout_on_year(request, year):
    if request.method == "GET":
        # query from db
        ctx = {"rules": crop_rules, "layout": None}
        try:
            plot = models.Plot.objects.get(year=year)
            ctx["layout"] = {
                "width": plot.width,
                "height": plot.height,
                "grid": plot.grid,
            }
            rsp = JsonResponse(ctx)
            print(rsp)
            return rsp
        except models.Plot.DoesNotExist:
            return JsonResponse(ctx)

    return HttpResponse(status=405)
