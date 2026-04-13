from django.contrib import admin
from django.urls import path, include
from django.conf import settings            # Đã thêm import này
from django.conf.urls.static import static
from users.views import LoginView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')), 
    path('api/tours/', include('tours.urls')), 
    path('api/login/', LoginView.as_view(), name='login_direct'),
]

# Bây giờ dòng này sẽ không còn lỗi NameError nữa
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)