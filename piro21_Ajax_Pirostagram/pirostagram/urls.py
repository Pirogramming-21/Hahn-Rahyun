from django.urls import path
from . import views

app_name = 'pirostagram'

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('post_new/', views.post_new, name='post_new'),
    path('like/', views.like, name='like'),
    path('add_comment/<int:post_id>/', views.add_comment, name='add_comment'),
    path('delete_comment/', views.delete_comment, name='delete_comment'),
]
