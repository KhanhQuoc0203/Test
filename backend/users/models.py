from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Thêm các trường theo yêu cầu dự án
    phone = models.CharField(max_length=15, unique=True, null=True, blank=True)
    role = models.CharField(
        max_length=20, 
        choices=[('USER', 'User'), ('CREATOR', 'Creator'), ('ADMIN', 'Admin')],
        default='USER'
    )

    def __str__(self):
        return self.username