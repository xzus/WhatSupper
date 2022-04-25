from django.db import models

# Create your models here.

class RecipeVotes(models.Model):
    recipe = models.CharField(max_length=120)
    votes = models.IntegerField()

    def __str__(self):
        return str(self.recipe) + " " + str(self.votes)

class Recipe(models.Model):
    recipeName = models.CharField(max_length=120)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return str(self.recipe) + " " + str(self.votes)
