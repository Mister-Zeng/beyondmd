# Generated by Django 4.1.4 on 2022-12-28 00:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beyondmd', '0008_alter_exercise_id_alter_reviewer_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='reviewer',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]