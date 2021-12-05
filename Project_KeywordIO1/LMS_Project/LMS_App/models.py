from django.db import models


# Create your models here.
class Books(models.Model):
    Name = models.CharField(max_length=100)
    Author = models.CharField(max_length=20)
    Price = models.FloatField()
