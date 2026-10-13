from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny , IsAuthenticated
from rest_framework.views import APIView
from django.http import JsonResponse


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class ProtectedView(APIView): 
    permission_classes = [IsAuthenticated] #accessToken do or access lo 

    def get(self, request): 
        return JsonResponse({"message" : "protected CONFIDENTIAL content of the dashboard fetched"})
