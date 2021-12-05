from django.urls import path,include
from .views import BooksViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('books', BooksViewSet, basename='books')


urlpatterns = [
    path('app/',include(router.urls) ),
]
