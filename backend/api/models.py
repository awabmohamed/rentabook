from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    description = models.TextField()
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Rental(models.Model):
    user = models.CharField(max_length=100)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    rental_date = models.DateTimeField(auto_now_add=True)
    return_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.user} rented {self.book.title}"
