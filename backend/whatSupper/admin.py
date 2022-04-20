from django.contrib import admin

# Register your models here.
from .models import RecipeVotes

class RecipeVotesAdmin(admin.ModelAdmin):
    list_display = ('recipe', 'votes')

admin.site.register(RecipeVotes, RecipeVotesAdmin)
