from __future__ import unicode_literals

from django.contrib.auth.models import AbstractUser
from django.contrib.contenttypes import models
from django.db import models


class User(AbstractUser):
    first_name = models.CharField(u'first_name', max_length=50, blank=False)
    last_name = models.CharField(u'last_name', max_length=50, blank=False)
    email = models.EmailField(u'e-mail', blank=False, unique=True)

    class Meta:
        verbose_name = u'user'
        verbose_name_plural = u'users'


class Authored(models.Model):
    author = models.ForeignKey(User)

    class Meta:
        abstract = True

class Dated(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Named(models.Model):
    title = models.CharField(max_length=150, blank=False)

    class Meta:
        abstract = True