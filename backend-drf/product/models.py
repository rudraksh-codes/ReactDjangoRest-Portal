from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2) #currency 
    stock = models.PositiveIntegerField() #natural numbers

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE 
    )
    product = models.ForeignKey(
        Product, 
        related_name='orders', 
        on_delete=models.CASCADE
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    razorpay_order_id = models.CharField(
        max_length=255,
        blank=True, 
        null=True
    )
    razorpay_payment_id = models.CharField(
        max_length=255,
        blank=True, 
        null=True
    )
    razorpay_signature = models.CharField(
        max_length=255,
        blank=True, 
        null=True
    )
    is_paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order : {self.id} - {self.product.name}"

    