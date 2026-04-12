from django.urls import path
from .views import TourCreateView, TourDetailAPIView

urlpatterns = [
    path('', TourCreateView.as_view(), name='tour-create'),
    path('<int:pk>/', TourDetailAPIView.as_view(), name='tour-detail'),
]