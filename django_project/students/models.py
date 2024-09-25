from django.db import models

class Student(models.Model):
    name = models.CharField(verbose_name="Name", max_length=240)
    email = models.EmailField()
    document = models.CharField(verbose_name="Document", max_length=20)
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField(verbose_name="Registration Date", auto_now_add=True)
    photo = models.CharField(verbose_name="URL", max_length=512)

    def __str__(self):
        return self.name