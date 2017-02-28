from django.contrib.auth import get_user_model
from django.test import TestCase

from event.models import Event
from like.models import Like
from ugc.models import Post


class TestLike(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create(username="test_user")
        self.post = Post.objects.create(author=self.user, content='test')

    def test_like_adds(self):
        likes_count_before = self.post.likes.count()
        like = Like.objects.create(author=self.user, target=self.post)
        likes_count_after = self.post.likes.count()
        assert likes_count_before + 1 == likes_count_after

    def test_like_adds_to_events(self):
        events_count_before = Event.objects.count()
        like = Like.objects.create(author=self.user, target=self.post)
        events_count_after = Event.objects.count()
        assert events_count_before + 1 == events_count_after
