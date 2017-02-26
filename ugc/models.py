from __future__ import unicode_literals

from django.db import models

from core.models import Authored, Dated
from like.models import Likeable


class Post(Authored, Dated, Likeable):
    content = models.TextField(max_length=1024, blank=False)