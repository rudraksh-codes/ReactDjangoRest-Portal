from django.http import HttpResponse
import time
from testCelery.tasks import celery_test_task

def celery_test(request): 
    celery_test_task.delay()
    return HttpResponse('<h3>Function executed successfully!</h3>')
