from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTOkenPairWithColorView, CustomUserCreate, HelloWorldView, LogoutAndBlackListRefreshTokenForUserView

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/obtain/',ObtainTOkenPairWithColorView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/',HelloWorldView.as_view(), name='hello world'),
    path('blacklist/',LogoutAndBlackListRefreshTokenForUserView.as_view(), name='blacklist')
    # path(),

]