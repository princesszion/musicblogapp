from rest_framework import serializers
from .models import BlogPost, Comment

# class BlogPostSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BlogPost
#         fields = ['id', 'title', 'content', 'thumbnail', 'created_at', 'updated_at', 'author']

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['title', 'content', 'thumbnail', 'created_at', 'updated_at', 'author']

    def create(self, validated_data):
        return BlogPost.objects.create(**validated_data)
    
    
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'post', 'author', 'content', 'created_at', 'updated_at']
