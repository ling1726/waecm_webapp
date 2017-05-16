from flask import Flask,render_template, jsonify
import requests
import threading
import thread
import time
app = Flask(__name__)


@app.route('/')
def hello_world():
    print ("request sent to jsonplaceholder")


   # instance_1= requests.get("https://localhost:8080/api/healthcheck")
    #print instance_1.json()
    #r = requests.get("https://jsonplaceholder.typicode.com/posts/1")
   # r1 = requests.get("https://jsonplaceholder.typicode.com/posts/7")


    return render_template('index.html')




if __name__ == '__main__':
   app.run(debug=True)