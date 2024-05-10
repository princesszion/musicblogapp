from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import BlogPost, Comment
from .serializers import BlogPostSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

# Views for BlogPosts
class BlogPostList(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        posts = BlogPost.objects.all()
        serializer = BlogPostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        if request.user.is_staff:
            serializer = BlogPostSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(author=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

class BlogPostDetail(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        return get_object_or_404(BlogPost, pk=pk)

    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = BlogPostSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        if request.user.is_staff:
            post = self.get_object(pk)
            serializer = BlogPostSerializer(post, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, pk):
        if request.user.is_staff:
            post = self.get_object(pk)
            post.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
            

# Views for Comments
class CommentList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, post_pk):
        comments = Comment.objects.filter(post_id=post_pk)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    def post(self, request, post_pk):
        serializer = CommentSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(author=request.user, post_id=post_pk)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentDetail(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        return get_object_or_404(Comment, pk=pk)

    def get(self, request, pk):
        comment = self.get_object(pk)
        serializer = CommentSerializer(comment)
        return Response(serializer.data)

    def delete(self, request, pk):
        if request.user.is_staff or request.user == self.get_object(pk).author:
            comment = self.get_object(pk)
            comment.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        comment = self.get_object(pk)
        if request.user.is_staff or request.user == comment.author:
            serializer = CommentSerializer(comment, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)
