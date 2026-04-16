from rest_framework import status, generics
from rest_framework.response import Response
from .serializers import RegisterSerializer, UserSerializer
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

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
            refresh = RefreshToken.for_user(user)
            return Response({
                "message": "Đăng nhập thành công!",
                "access_token": str(refresh.access_token),
                "refresh_token": str(refresh),
                "username": user.username,
                "role": user.role
            }, status=status.HTTP_200_OK)
            
        return Response({"error": "Sai tài khoản hoặc mật khẩu"}, status=status.HTTP_400_BAD_REQUEST)
# --- Phần code mới của Khánh ---

class VerifyOTPView(APIView):
    """
    API xác thực mã OTP gửi qua Email
    """
    def post(self, request):
        # Lấy dữ liệu từ frontend gửi lên
        email = request.data.get('email')
        otp = request.data.get('otp')
        
        if not email or not otp:
            return Response({"error": "Vui lòng cung cấp đầy đủ email và mã OTP"}, status=status.HTTP_400_BAD_REQUEST)

        # Logic kiểm tra OTP (Khánh có thể tích hợp bảng OTP sau)
        # Tạm thời để mặc định True để Khánh test luồng Frontend
        is_valid = True 
        
        if is_valid:
            return Response({"message": "Mã OTP chính xác!"}, status=status.HTTP_200_OK)
        
        return Response({"error": "Mã OTP không đúng hoặc đã hết hạn"}, status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordView(APIView):
    """
    API đặt lại mật khẩu mới sau khi đã xác thực OTP
    """
    def post(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')
        new_password = request.data.get('new_password')

        if not all([email, otp, new_password]):
            return Response({"error": "Thiếu thông tin bắt buộc"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            from django.contrib.auth import get_user_model
            User = get_user_model()
            user = User.objects.get(email=email)
            
            # Cập nhật mật khẩu mới
            user.set_password(new_password)
            user.save()
            
            return Response({"message": "Đặt lại mật khẩu thành công!"}, status=status.HTTP_200_OK)
            
        except User.DoesNotExist:
            return Response({"error": "Không tìm thấy người dùng với email này"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
