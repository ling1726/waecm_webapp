from flask import Blueprint, jsonify
import subprocess
import re

healthcheckAPI = Blueprint('healthcheckAPI', __name__)

@healthcheckAPI.route('/api/healthcheck', methods=['GET'])
def doHealthCheck():

    status_request = subprocess.Popen("monit status", shell=True, stdout=subprocess.PIPE)
    sreq2 = re.split(r'\n\n', status_request.stdout.read())

    #title_info = sreq2[0]
    process_info = sreq2[1]
    system_info = sreq2[2]

    sreq = re.split(r'\s{2,}', process_info)
    sreq = sreq[1:]
    process_dict = {'Process' : dict(zip(sreq[0::2], sreq[1::2]))}

    sreq = re.split(r'\s{2,}', system_info)
    sreq = sreq[1:]
    system_dict = {'System' : dict(zip(sreq[0::2], sreq[1::2]))}

    message_dict = dict(system_dict.items() + process_dict.items())

    return jsonify(message_dict)

