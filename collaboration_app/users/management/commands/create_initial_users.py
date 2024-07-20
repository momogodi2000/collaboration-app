from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Create initial super admin and project manager'

    def handle(self, *args, **kwargs):
        User = get_user_model()

        if not User.objects.filter(username='superadmin').exists():
            User.objects.create_superuser(
                username='superadmin',
                email='superadmin@gmail.com',
                password='admin123',
                role='super_admin'
            )

        if not User.objects.filter(username='projectmanager').exists():
            User.objects.create_user(
                username='projectmanager',
                email='projectmanager@gmail.com',
                password='manager123',
                role='project_manager'
            )

        self.stdout.write(self.style.SUCCESS('Successfully created initial users'))
