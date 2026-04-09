
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Hiển thị thêm các trường phone, role trong trang Admin 
class CustomUserAdmin(UserAdmin):
    model = User
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('phone', 'role')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('phone', 'role')}),
    )

admin.site.register(User, CustomUserAdmin)