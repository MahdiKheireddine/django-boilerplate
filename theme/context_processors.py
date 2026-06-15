from django.conf import settings


def daisyui_themes(request):
    """Expose the configured DaisyUI theme list to all templates."""
    return {"daisyui_themes": getattr(settings, "DAISYUI_THEMES", ["light", "dark"])}
