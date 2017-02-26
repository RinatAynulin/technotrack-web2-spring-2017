from django.db.models.signals import post_save, pre_save, post_init, post_delete, pre_delete

from event.models import Event, Eventable


def post_save_for_eventable(instance, created=False, *args, **kwargs):
    if created:
        print '{} was created'.format(instance)
        Event.objects.create(target=instance, author=instance.get_author(), title=instance.get_description())


def post_delete_for_eventable(instance, *args, **kwargs):
    instance.event.remove()


for model in Eventable.__subclasses__():
    post_save.connect(post_save_for_eventable, sender=model)
    pre_delete.connect(post_delete_for_eventable, sender=model)