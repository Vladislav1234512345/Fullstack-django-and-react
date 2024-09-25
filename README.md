Пошагавая инструкция для запуска django-проекта:
Windows:

1. Установка виртуальной среды venv:
python -m venv venv

2. Активация виртуальной среды venv:
venv\Scripts\activate

#Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
#на винде помогла эта команда перед тем как активировать среду в текущем терминале powershell

#а чтобы всегда работала 2 команда в powershell, нужно исполнить эту команду Set-ExecutionPolicy RemoteSigned (не проверял)


3. Установка зависимостей проекта:
pip install -r requirements.txt

4. Переход из корневого каталога в каталог django_project:
cd django_project

5. Запуск django сервера:
python manage.py runserver
 

