# Generated by Django 4.1.4 on 2022-12-19 23:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('beyondmd', '0002_alter_exercise_difficulty'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reviewer',
            old_name='exercise',
            new_name='exercise_id',
        ),
    ]
