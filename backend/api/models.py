from django.db import models

class Book(models.Model):
    external_id = models.CharField(max_length=200, unique=True)  
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    description = models.TextField()
    available = models.BooleanField(default=True)
    cover = models.URLField(default='https://via.placeholder.com/150')

    def __str__(self):
        return self.title

class Rental(models.Model):
    user_name = models.CharField(max_length=100)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    rental_date = models.DateTimeField(auto_now_add=True)
    return_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.user_name} rented {self.book.title}"
