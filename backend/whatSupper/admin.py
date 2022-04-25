from django.contrib import admin

# Register your models here.
from .models import RecipeVotes, Recipe

class RecipeVotesAdmin(admin.ModelAdmin):
    list_display = ('recipe', 'votes')

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('recipeName', 'description', 'image')

admin.site.register(RecipeVotes, RecipeVotesAdmin)
admin.site.register(Recipe, RecipeAdmin)
