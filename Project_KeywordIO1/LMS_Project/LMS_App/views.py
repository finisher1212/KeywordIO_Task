from django.db.models.query import QuerySet
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.serializers import Serializer
from .serializers import UserSerializer, BooksSerializer
from .models import Books
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer 

class BooksViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = [IsAuthenticated]
    # permission_classes = [AllowAny]
