from django.contrib.auth import get_user_model
from django.test import TestCase

from event.models import Event
from ugc.models import Post


class TestPost(TestCase):

    def setUp(self):
        self.user = get_user_model().objects.create(username="test_user")

    def tearDown(self):
        pass

    def testPostWasAddedToEvents(self):
        events_count_before = Event.objects.count()
        post = Post.objects.create(author=self.user, content='test')
        events_count_after = Event.objects.count()
        assert events_count_before + 1 == events_count_after
