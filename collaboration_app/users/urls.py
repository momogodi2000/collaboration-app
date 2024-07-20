from django.urls import path
from .views import UserCreateView, CustomTokenObtainPairView
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('signup/', UserCreateView.as_view(), name='signup'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

]
