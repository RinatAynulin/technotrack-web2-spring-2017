from django.db.models.signals import post_save, pre_save, post_init, post_delete
from django.dispatch import receiver
from .models import Friendship, FriendshipRequest


@receiver(post_init, sender=FriendshipRequest)
def pre_save_for_friendship(instance, *args, **kwargs):
    instance.approved_was = instance.approved


@receiver(post_save, sender=FriendshipRequest)
def post_save_for_friendship(instance, created=False, *args, **kwargs):
    if not instance.approved_was and instance.approved:
        Friendship.objects.create(first_user=instance.sender, second_user=instance.receiver)
        Friendship.objects.create(first_user=instance.receiver, second_user=instance.sender)


@receiver(post_delete, sender=FriendshipRequest)
def post_delete_for_friend(instance, *args, **kwargs):
        Friendship.objects.get(first_user=instance.initiator, second_user=instance.recipient).delete()
        Friendship.objects.get(first_user=instance.recipient, second_user=instance.initiator).delete()