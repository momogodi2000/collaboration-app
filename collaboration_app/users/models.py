from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('super_admin', 'Super Admin'),
        ('project_manager', 'Project Manager'),
        ('developer', 'Developer'),
        ('designer', 'Designer'),
    )
    role = models.CharField(max_length=30, choices=ROLE_CHOICES, default='developer')
