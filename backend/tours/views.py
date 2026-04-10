from rest_framework import generics
from rest_framework.views import APIView # Thiếu dòng này
from rest_framework.response import Response # Thiếu dòng này
from .models import Tour
from .serializers import TourSerializer

# Lấy danh sách và Tạo tour (Dùng Generics cho nhanh)
class TourCreateView(generics.ListCreateAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer

# Lấy chi tiết 1 tour (Dùng APIView để Khánh dễ tùy biến logic)
class TourDetailAPIView(APIView):
    def get(self, request, pk):
        try:
            # Tìm tour theo ID (pk)
            tour = Tour.objects.get(pk=pk)
            serializer = TourSerializer(tour)
            return Response(serializer.data)
        except Tour.DoesNotExist:
            return Response({"error": "Không tìm thấy tour!"}, status=404)