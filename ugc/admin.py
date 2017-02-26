from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline

from like.models import Like
from ugc.models import Post


class LikeInLine(GenericTabularInline):
    model = Like
    ct_field = "target_content_type"
    ct_fk_field = "target_id"
    fk_name = "target"



@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    inlines = LikeInLine,
