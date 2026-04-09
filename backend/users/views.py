from rest_framework import status, generics
from rest_framework.response import Response
from .serializers import RegisterSerializer
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Đăng ký thành công!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(username=username, password=password)
        
        if user is not None:
            # Nếu nhóm chưa cài Token, tạm thời trả về thông báo thành công
            return Response({
                "message": "Đăng nhập thành công!",
                "username": user.username,
                "role": user.role
            }, status=status.HTTP_200_OK)
            
        return Response({"error": "Sai tài khoản hoặc mật khẩu"}, status=status.HTTP_400_BAD_REQUEST)