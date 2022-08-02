from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from accounts.views import LoginView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view(), name='login'),
    # path('user/', UserView.as_view()),
    # path('logout/', LogoutView.as_view()),
]
