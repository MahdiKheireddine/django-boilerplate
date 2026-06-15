# production.py
from .base import *
from config.env import env

DEBUG = env.bool('DJANGO_DEBUG', default=False)

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=[])

# Send real email through Brevo's HTTP API via django-anymail.
EMAIL_BACKEND = "anymail.backends.brevo.EmailBackend"