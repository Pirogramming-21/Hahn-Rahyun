from django.shortcuts import render, redirect, get_object_or_404
from .models import Post, Comment
from .forms import PostForm, CommentForm
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from django.urls import reverse

# Create your views here.
def post_list(request):
    posts = Post.objects.all()
    ctx = {
        'posts': posts,
    }
    return render(request, 'pirostagram/post_list.html', ctx)

def post_new(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('pirostagram:post_list')
        else:
            ctx = {
                'form': form,
            }
            return render(request, 'pirostagram/post_new.html', ctx)
    elif request.method == 'GET':
        form = PostForm()
        ctx = {
            'form': form,
        }
        return render(request, 'pirostagram/post_new.html', ctx)
    
@csrf_exempt
def like(request):
    req = json.loads(request.body)
    post_id = req['id']
    button_type = req['type']

    post = Post.objects.get(id=post_id)

    if button_type == 'like':
        post.like += 1
    else:
        post.dislike += 1

    post.save()

    return JsonResponse({'id': post_id, 'type':button_type})

@csrf_exempt
def add_comment(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    
    if request.method == 'POST':
        author = request.POST.get('author', 'Anonymous')
        comment_content = request.POST.get('comment')

        comment = Comment(
            post=post,
            content=comment_content
        )
        
        if request.user.is_authenticated:
            comment.author = request.user
        else:
            comment.author_name = author
        
        comment.save()
        
        return redirect('pirostagram:post_list')  # 댓글 작성 후 post_list 페이지로 리다이렉트

    return render(request, 'pirostagram:post_list.html')


@csrf_exempt
def delete_comment(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        comment_id = data.get('comment_id')
        
        try:
            comment = Comment.objects.get(id=comment_id)
            comment.delete()
            return JsonResponse({'success': True})
        except Comment.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Comment not found'})