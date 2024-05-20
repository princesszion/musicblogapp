# from rest_framework import serializers
# from .models import BlogPost, Comment

# # class BlogPostSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = BlogPost
# #         fields = ['id', 'title', 'content', 'thumbnail', 'created_at', 'updated_at', 'author']

# # class BlogPostSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = BlogPost
# #         fields = ['title', 'content', 'thumbnail', 'created_at', 'updated_at', 'author']
# #         read_only_fields = ['author']  # Ensure author is not expected from request data

# #     def create(self, validated_data):
# #         validated_data['author'] = self.context['request'].user
# #         return BlogPost.objects.create(**validated_data)


# class BlogPostSerializer(serializers.ModelSerializer):
#     thumbnail = serializers.SerializerMethodField()

#     class Meta:
#         model = BlogPost
#         fields = ['id', 'title', 'content', 'thumbnail', 'created_at', 'updated_at', 'author']
#         read_only_fields = ['author']  # Ensure author is not expected from request data

#     def get_thumbnail(self, obj):
#         request = self.context.get('request')
#         if obj.thumbnail:
#             thumbnail_url = obj.thumbnail.url
#             return request.build_absolute_uri(thumbnail_url)
#         return None

#     def create(self, validated_data):
#         validated_data['author'] = self.context['request'].user
#         return BlogPost.objects.create(**validated_data)

# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = ['id', 'post', 'author', 'content', 'created_at', 'updated_at']



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
    class Meta:
        model = Comment
        fields = ['id', 'post', 'author', 'content', 'created_at', 'updated_at']
        read_only_fields = ['author', 'post']

    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user
        post = BlogPost.objects.get(pk=self.context['post_pk'])
        validated_data['post'] = post
        return Comment.objects.create(**validated_data)
