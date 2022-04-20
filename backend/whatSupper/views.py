from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RecipeVotesSerializer
from .models import RecipeVotes

# Create your views here.

class RecipeVotesView(viewsets.ModelViewSet):
    serializer_class = RecipeVotesSerializer
    queryset = RecipeVotes.objects.all()