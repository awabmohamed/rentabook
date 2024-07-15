from django.http import HttpResponse
from rest_framework import viewsets
from .models import Book, Rental
from .serializers import BookSerializer, RentalSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class RentalViewSet(viewsets.ModelViewSet):
    queryset = Rental.objects.all()
    serializer_class = RentalSerializer

def index(request):
    return HttpResponse("Welcome to the Rent-A-Book API!")
