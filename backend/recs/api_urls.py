from django.conf.urls import include
from django.urls import path

api_urls = [
    path('recs/', include(('recommendations.api_urls', 'recommendations'), namespace='recs')),
    path('accounts/', include(('accounts.api_urls', 'accounts'), namespace='accounts')),
]


urlpatterns = [
    path('api/', include(api_urls))
]
