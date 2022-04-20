from rest_framework import serializers
from .models import RecipeVotes

class RecipeVotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeVotes
        fields = ('id', 'recipe', 'votes')