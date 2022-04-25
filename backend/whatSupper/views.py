from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RecipeVotesSerializer, RecipeSerializer
from .models import RecipeVotes, Recipe

# Create your views here.

class RecipeVotesView(viewsets.ModelViewSet):
    serializer_class = RecipeVotesSerializer
    queryset = RecipeVotes.objects.all()

class RecipeView(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()