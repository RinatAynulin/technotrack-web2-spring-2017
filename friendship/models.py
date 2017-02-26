from __future__ import unicode_literals

from django.db import models

from core.models import User
from event.models import Eventable


class Friendship(Eventable):
    sender = models.ForeignKey(User, blank=False, related_name='sender')
    receiver = models.ForeignKey(User, blank=False, related_name='receiver')
    approved = models.BooleanField(default=False)

    def get_description(self):
        return '{} has added {} as a friend'.format(self.sender.username, self.receiver.username)

    def get_author(self):
        return self.sender


class Friends(models.Model):
    first_user = models.ForeignKey(User, blank=False, related_name='first_user')
    second_user = models.ForeignKey(User, blank=False, related_name='second_user')

