from flask import Flask,render_template, request, jsonify
import requests
import threading
import thread
import time
app = Flask(__name__)


testData = {
  "Process": {
    "children": "0", 
    "cpu percent": "0.0%", 
    "cpu percent total": "0.0%", 
    "data collected": "Mon, 15 May 2017 20:40:38", 
    "effective uid": "0", 
    "gid": "0", 
    "memory kilobytes": "37.5 MB", 
    "memory kilobytes total": "37.5 MB", 
    "memory percent": "0.4%", 
    "memory percent total": "0.4%", 
    "monitoring status": "Monitored", 
    "parent pid": "1", 
    "pid": "954", 
    "port response time": "0.010s to localhost:8080 [HTTP via TCPSSL]", 
    "status": "Running", 
    "uid": "0", 
    "uptime": "53m"
  }, 
  "System": {
    "cpu": "2.9%us 1.0%sy 0.2%wa", 
    "data collected": "Mon, 15 May 2017 20:40:38", 
    "load average": "[0.05] [0.16] [0.20]", 
    "memory usage": "3.8 GB [49.3%]", 
    "monitoring status": "Monitored", 
    "status": "Running", 
    "swap usage": "440.9 MB [5.4%]"
  }
}


@app.route('/')
def hello_world():
    print ("request sent to jsonplaceholder")


    r = requests.get("https://jsonplaceholder.typicode.com/posts/1")
    r1 = requests.get("https://jsonplaceholder.typicode.com/posts/7")

    return render_template('index.html', data=r.json(), data2=r1.json())


@app.route('/status')
def getStatus():
    status = {"appserver1":testData, "appserver2":testData}
    
    return jsonify(status)


if __name__ == '__main__':
   app.run(debug=True)
