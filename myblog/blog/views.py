from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import BlogPost, Comment
from .serializers import BlogPostSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
import json
from django.contrib.auth import get_user_model



# Views for BlogPosts
# class BlogPostList(APIView):
#     permission_classes = [AllowAny]

#     def get(self, request):
#         posts = BlogPost.objects.all()
#         serializer = BlogPostSerializer(posts, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         if request.user.is_staff:
#             serializer = BlogPostSerializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save(author=request.user)
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         else:
#             return Response(status=status.HTTP_403_FORBIDDEN)

class BlogPostList(APIView):
    
    def get(self, request):
            posts = BlogPost.objects.all()
            serializer = BlogPostSerializer(posts, many=True)
            return Response(serializer.data)
    
    def post(self, request):
        permission_classes = [IsAuthenticated]
        parser_classes = (MultiPartParser, FormParser)
        serializer = BlogPostSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            post = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    # def post(self, request):
    #     User = get_user_model()
    #     user = User.objects.get(username=request.user.username)  # Directly fetch the user
    #     post = BlogPost.objects.create(
    #         title=request.data['title'],
    #         content=request.data['content'],
    #         thumbnail=request.data['thumbnail'],
    #         author=user
    #     )
    #     return Response({'status': 'post created'}, status=status.HTTP_201_CREATED)
    # def post(self, request):
    #     serializer = BlogPostSerializer(data=request.data, context={'request': request})
    #     if serializer.is_valid():
    #         post = serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     else:
    #         print("Serializer Errors:", serializer.errors)
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import BlogPost, Comment
from .serializers import BlogPostSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
import logging
from .models import Event
from .serializers import EventSerializer

logger = logging.getLogger(__name__)

class BlogPostList(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request):
        posts = BlogPost.objects.all()
        serializer = BlogPostSerializer(posts, many=True, context={'request': request})
        return Response(serializer.data)
    
    def post(self, request):
        logger.info("Received POST request with data: %s", request.data)
        serializer = BlogPostSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            post = serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            logger.error("Error creating post: %s", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BlogPostDetail(APIView):
    def get_object(self, pk):
        return get_object_or_404(BlogPost, pk=pk)

    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = BlogPostSerializer(post, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk):
        if request.user.is_staff:
            post = self.get_object(pk)
            serializer = BlogPostSerializer(post, data=request.data, context={'request': request})
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

class CommentList(APIView):
    parser_classes = (JSONParser,)

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAuthenticated()]
        return [AllowAny()]

    def get(self, request, post_pk):
        comments = Comment.objects.filter(post_id=post_pk)
        serializer = CommentSerializer(comments, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, post_pk):
        serializer = CommentSerializer(data=request.data, context={'request': request, 'post_pk': post_pk})
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentDetail(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        return get_object_or_404(Comment, pk=pk)

    def get(self, request, pk):
        comment = self.get_object(pk)
        serializer = CommentSerializer(comment, context={'request': request})
        return Response(serializer.data)

    def delete(self, request, pk):
        comment = self.get_object(pk)
        if request.user.is_staff or request.user == comment.author:
            comment.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

    def put(self, request, pk):
        comment = self.get_object(pk)
        if request.user.is_staff or request.user == comment.author:
            serializer = CommentSerializer(comment, data=request.data, context={'request': request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)



class EventList(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)