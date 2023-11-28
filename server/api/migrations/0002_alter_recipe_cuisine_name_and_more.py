# Generated by Django 4.2.7 on 2023-11-27 01:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="recipe",
            name="cuisine_name",
            field=models.ForeignKey(
                db_column="cuisine_name",
                on_delete=django.db.models.deletion.CASCADE,
                to="api.cuisine",
            ),
        ),
        migrations.AlterField(
            model_name="recipe_needs_ingredient",
            name="ingredient_name",
            field=models.ForeignKey(
                db_column="ingredient_name",
                on_delete=django.db.models.deletion.CASCADE,
                to="api.ingredient",
            ),
        ),
        migrations.AlterField(
            model_name="recipe_needs_ingredient",
            name="recipe_id",
            field=models.ForeignKey(
                db_column="recipe_id",
                on_delete=django.db.models.deletion.CASCADE,
                to="api.recipe",
            ),
        ),
        migrations.AlterField(
            model_name="refrigerator",
            name="user_id",
            field=models.ForeignKey(
                db_column="user_id",
                on_delete=django.db.models.deletion.CASCADE,
                to="api.user",
            ),
        ),
        migrations.AlterField(
            model_name="refrigerator_stores_ingredient",
            name="ingredient_name",
            field=models.ForeignKey(
                db_column="ingredient_name",
                on_delete=django.db.models.deletion.CASCADE,
                to="api.ingredient",
            ),
        ),
        migrations.AlterField(
            model_name="refrigerator_stores_ingredient",
            name="refrigerator",
            field=models.ForeignKey(
                db_column="refrigerator",
                on_delete=django.db.models.deletion.CASCADE,
                to="api.refrigerator",
            ),
        ),
        migrations.AlterField(
            model_name="review",
            name="recipe_id",
            field=models.ForeignKey(
                db_column="recipe_id",
                on_delete=django.db.models.deletion.CASCADE,
                to="api.recipe",
            ),
        ),
        migrations.AlterField(
            model_name="review",
            name="user_id",
            field=models.ForeignKey(
                db_column="user_id",
                on_delete=django.db.models.deletion.CASCADE,
                to="api.user",
            ),
        ),
    ]