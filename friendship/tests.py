from django.contrib.auth import get_user_model
from django.test import TestCase

from friendship.models import FriendshipRequest, Friendship


class TestFriend(TestCase):
    def setUp(self):
        self.first_user = get_user_model().objects.create(username="test_user_1", email="test1@mail.ru")
        self.second_user = get_user_model().objects.create(username="test_user_2", email="test2@mail.ru")

    def test_friendship_request_approve_work(self):
        friendship_request = FriendshipRequest.objects.create(sender=self.first_user, receiver=self.second_user,
                                                              approved=True)
        assert Friendship.objects.count() == 2
        friendship_request.approved = False
        friendship_request.save()
        assert Friendship.objects.count() == 0
