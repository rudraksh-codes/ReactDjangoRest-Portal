from stock_prediction_main.celery import app 
import time 

@app.task()
def celery_test_task():
    time.sleep(10) #task taking 10 seconds to execute... 
    return "Task Executed Successfully 10 seconds later ."