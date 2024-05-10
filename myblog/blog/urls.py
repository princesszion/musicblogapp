from django.urls import path
from .views import BlogPostList, BlogPostDetail, CommentList, CommentDetail

urlpatterns = [
    path('posts/', BlogPostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', BlogPostDetail.as_view(), name='post-detail'),
    path('posts/<int:post_pk>/comments/', CommentList.as_view(), name='comment-list'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
]
