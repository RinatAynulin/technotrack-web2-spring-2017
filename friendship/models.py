from __future__ import unicode_literals

from django.db import models

from core.models import User


class Friendship(models.Model):
    sender = models.ForeignKey(User, blank=False, related_name='sender')
    receiver = models.ForeignKey(User, blank=False, related_name='receiver')
    approved = models.BooleanField(default=False)


class Friends(models.Model):
    first_user = models.ForeignKey(User, blank=False, related_name='first_user')
    second_user = models.ForeignKey(User, blank=False, related_name='second_user')