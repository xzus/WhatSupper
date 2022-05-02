from django.db import models

# Create your models here.

class Recipe(models.Model):
    recipeName = models.CharField(max_length=120)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return str(self.recipeName) + " " + str(self.description)

class RecipeVotes(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete = models.CASCADE)
    votes = models.IntegerField()

    def __str__(self):
        return str(self.recipe.recipeName) + " " + str(self.votes)
