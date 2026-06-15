from .base import *

# Print verification / password-reset emails to the console during dev.
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"