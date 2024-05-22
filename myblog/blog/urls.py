from django.urls import path
from .views import  BlogPostDetail, CommentList, CommentDetail, BlogPostList, EventList

urlpatterns = [
    path('posts/', BlogPostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', BlogPostDetail.as_view(), name='post-detail'),
    path('posts/<int:post_pk>/comments/', CommentList.as_view(), name='comment-list'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
    path('events/', EventList.as_view(), name='event-list'),
]


