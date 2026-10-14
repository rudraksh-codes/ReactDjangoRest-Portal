from django.urls import path
from accounts import views as UserView
from accounts import views as AuthView


urlpatterns = [
    path('register/', UserView.RegisterView.as_view()), 
    path('protected-view/', AuthView.ProtectedView.as_view()), 


] 