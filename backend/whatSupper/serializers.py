from rest_framework import serializers
from .models import RecipeVotes, Recipe

class RecipeVotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeVotes
        fields = ('id', 'recipe', 'votes')
    
class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'recipeName', 'description', 'image')
        