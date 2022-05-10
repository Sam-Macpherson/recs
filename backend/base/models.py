import uuid

from django.db import models
from django.utils import timezone


class BaseModel(models.Model):
    """
    Base model that all models on the site should inherit from.
    """
    id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False, primary_key=True)
    created_on = models.DateTimeField(auto_now_add=True, blank=True)
    removed_on = models.DateTimeField(null=True, blank=True)

    def delete(self, **kwargs):
        self.removed_on = timezone.now()
        self.save()

    def really_delete(self):
        super().delete()

    class Meta:
        abstract = True
