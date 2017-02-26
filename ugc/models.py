from __future__ import unicode_literals

from django.db import models

from core.models import Authored, Dated


class Post(Authored, Dated):
    content = models.TextField(max_length=1024, blank=False)