from django.contrib import admin

from friendship.models import FriendshipRequest, Friendship

admin.site.register([Friendship, FriendshipRequest])