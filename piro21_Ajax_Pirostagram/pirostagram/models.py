from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    like = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)


class Comment(models.Model):
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    content = models.TextField()
    author = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    author_name = models.CharField(max_length=100, blank=True)  # New field for anonymous users
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content