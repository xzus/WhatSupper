from rest_framework import serializers
from .models import RecipeVotes, Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'recipeName', 'description', 'image']
    #Create a new RecipeVotes object
    def create(self, validated_data):
        recipes_instance = Recipe.objects.create(**validated_data)
        recipe_votes_instance = RecipeVotes.objects.create(recipe=recipes_instance, votes=0)
        return recipes_instance
class RecipeVotesSerializer(serializers.ModelSerializer):
    
    recipe = RecipeSerializer(read_only=True)
    class Meta:
        model = RecipeVotes
        fields = ['id', 'recipe', 'votes']
        