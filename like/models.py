from __future__ import unicode_literals

from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from django.db import models

from core.models import Named, Authored


class Like(Authored):
    target_content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    target_id = models.PositiveIntegerField()
    target = GenericForeignKey('target_content_type', 'target_id')

    class Meta:
        unique_together = (('author', 'target_content_type', 'target_id'),)
        verbose_name = u'like'
        verbose_name_plural = u'likes'

    def __unicode__(self):
        return 'Like by {}'.format(self.author)


class LikeAble(models.Model):
    likes = GenericRelation(
        Like,
        content_type_field='target_content_type',
        object_id_field='target_id'
    )

    class Meta:
        abstract = True
