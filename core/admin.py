from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from ugc.models import Post
from .models import User

class PostInline(admin.StackedInline):
    model = Post
    can_delete = True
    extra = 0


@admin.register(User)
class UserAdmin(BaseUserAdmin):

    inlines = PostInline,
