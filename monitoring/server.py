from flask import Flask,render_template, request, jsonify
import requests
import threading
import thread
import time
app = Flask(__name__)


default = {
  "Process": {
    "cpu percent total": "N/A", 
    "data collected": "N/A", 
    "memory kilobytes total": "N/A", 
    "port response time": "N/A", 
    "status": "Connection failed", 
    "uptime": "N/A"
  }, 
  "System": {
    "cpu": "N/A"
  }
}


@app.route('/')
def hello_world():
    print ("request sent to jsonplaceholder")

    return render_template('index.html')


@app.route('/status')
def getStatus():

    try:
        appserver1 = requests.get("https://appserver1:8080/api/healthcheck", verify=False).json()
    except:
        appserver1 = default
    try:
        appserver2 = requests.get("https://appserver2:8080/api/healthcheck", verify=False).json()
    except:
        appserver2 = default
    
    status = {"appserver1":appserver1, "appserver2":appserver2} 
    return jsonify(status)






if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5000, debug=True)
