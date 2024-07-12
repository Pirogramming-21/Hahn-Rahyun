from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Review(models.Model):
    title = models.CharField(max_length=200)
    director = models.CharField(max_length=100)
    actors = models.CharField(max_length=200)
    genre = models.CharField(max_length=100)
    rating = models.FloatField(validators=[MinValueValidator(0.0), MaxValueValidator(5.0)])
    release_year = models.IntegerField(validators=[MinValueValidator(1800), MaxValueValidator(2100)])
    running_time = models.IntegerField(validators=[MinValueValidator(1)])
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title