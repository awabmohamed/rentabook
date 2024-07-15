from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Book, Rental
from .serializers import BookSerializer, RentalSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class RentalViewSet(viewsets.ModelViewSet):
    queryset = Rental.objects.all()
    serializer_class = RentalSerializer

    def create(self, request, *args, **kwargs):
        print("Received data:", request.data)  
        
        user_name = request.data.get('user_name')
        book_id = request.data.get('book')

        if not book_id:
            return Response({"detail": "book ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        book, created = Book.objects.get_or_create(
            title="Unknown Title", 
            defaults={"author": "Unknown Author", "description": "", "cover": "", "available": True}
        )
        
        if created:
            print(f"Created new book with ID: {book.id}")
        
        rental = Rental(user_name=user_name, book=book)
        rental.save()
        
        return Response(RentalSerializer(rental).data, status=status.HTTP_201_CREATED)

def index(request):
    return HttpResponse("Welcome to the Rent-A-Book API! Navigate to /api/ for API endpoints.")
