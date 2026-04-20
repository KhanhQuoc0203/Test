from django.db import models
from django.conf import settings

class Tour(models.Model):
    # Liên kết với người tạo (User)
    creator = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE,
        verbose_name="Người tạo"
    )
    address = models.CharField(max_length=255, default="Việt Nam")
    title = models.CharField(max_length=255, verbose_name="Tên Tour")
    description = models.TextField(verbose_name="Mô tả")
    price = models.DecimalField(max_digits=12, decimal_places=2, verbose_name="Giá")
    slots = models.IntegerField(verbose_name="Số chỗ")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Ngày tạo")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Chuyến du lịch"
        verbose_name_plural = "Các chuyến du lịch"