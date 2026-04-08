
# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Đăng ký model User vào trang admin
admin.site.register(User, UserAdmin)