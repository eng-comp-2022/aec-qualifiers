from django.db import models
from backend import aec_json


class Plot(models.Model):
    year = models.IntegerField(primary_key=True)
    width = models.IntegerField()
    height = models.IntegerField()
    grid = models.JSONField(
        encoder=aec_json.JSONEncoder
    )  # "grid": [0, 1, 7, 8, 3, 9]...}
