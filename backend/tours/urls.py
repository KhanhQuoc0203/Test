from django.urls import path
from .views import TourCreateView

urlpatterns = [
    path('', TourCreateView.as_view(), name='tour-create'),
]