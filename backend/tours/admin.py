from django.contrib import admin
from .models import Tour

@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    # Hiển thị các cột thông tin ra danh sách
    list_display = ('title', 'price', 'slots', 'creator', 'created_at')
    # Thêm bộ lọc bên phải
    list_filter = ('created_at', 'creator')
    # Thêm ô tìm kiếm
    search_fields = ('title', 'description')
