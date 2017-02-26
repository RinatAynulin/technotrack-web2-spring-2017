from __future__ import unicode_literals

from django.db import models

from core.models import Authored, Dated
from event.models import Eventable
from like.models import Likeable


class Post(Authored, Dated, Likeable, Eventable):
    content = models.TextField(max_length=1024, blank=False)

    def get_description(self):
        return '{} has added Post with content: {}'.format(self.author, self.content)

    def get_author(self):
        return self.author