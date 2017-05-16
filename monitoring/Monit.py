from flask import Flask,render_template, request, jsonify
import requests
import threading
import thread
import time
app = Flask(__name__)


@app.route('/')
def hello_world():
    print ("request sent to jsonplaceholder")


    r = requests.get("https://jsonplaceholder.typicode.com/posts/1")
    r1 = requests.get("https://jsonplaceholder.typicode.com/posts/7")

    return render_template('index.html', data=r.json(), data2=r1.json())




if __name__ == '__main__':
   app.run(debug=True)