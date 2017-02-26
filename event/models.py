from __future__ import unicode_literals

from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from django.db import models

from core.models import Authored, Dated, Named


class Event(Authored, Dated, Named):
    target_content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    target_id = models.PositiveIntegerField()
    target = GenericForeignKey('target_content_type', 'target_id')

    class Meta:
        verbose_name = u'event'
        verbose_name_plural = u'events'

    def __str__(self):
        return self.title


class Eventable(models.Model):
    event = GenericRelation(
        Event,
        content_type_field='target_content_type',
        object_id_field='target_id',
    )

    def get_description(self):
        return NotImplementedError

    def get_author(self):
        return NotImplementedError

    class Meta:
        abstract = True
