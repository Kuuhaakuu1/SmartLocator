from django.urls import include, path
from .views import *


urlpatterns = [

   path('login/', login),
   path('profile_picture/', profile_picture),
]