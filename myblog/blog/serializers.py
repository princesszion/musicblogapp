# from rest_framework import serializers
# from .models import BlogPost, Comment

# class BlogPostSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BlogPost
#         fields = ['id', 'title', 'content', 'thumbnail', 'created_at', 'updated_at', 'author']
#         read_only_fields = ['author']

#     def create(self, validated_data):
#         validated_data['author'] = self.context['request'].user
#         return BlogPost.objects.create(**validated_data)

# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = ['id', 'post', 'author', 'content', 'created_at', 'updated_at']
#         read_only_fields = ['author', 'post']

#     def create(self, validated_data):
#         validated_data['author'] = self.context['request'].user
#         post = BlogPost.objects.get(pk=self.context['post_pk'])
#         validated_data['post'] = post
#         return Comment.objects.create(**validated_data)




from rest_framework import serializers
from .models import BlogPost, Comment

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'content', 'thumbnail', 'created_at', 'updated_at', 'author']
        read_only_fields = ['author']

    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user
        return BlogPost.objects.create(**validated_data)

class CommentSerializer(serializers.ModelSerializer):
    author_username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Comment
        fields = ['id', 'post', 'author', 'author_username', 'content', 'created_at', 'updated_at']
        read_only_fields = ['author', 'post']

    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user
        post = BlogPost.objects.get(pk=self.context['post_pk'])
        validated_data['post'] = post
        return Comment.objects.create(**validated_data)

from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'fullName', 'email', 'phone', 'eventDate', 'venue', 'city', 'state', 'country', 'website', 'eventDescription', 'budget']
