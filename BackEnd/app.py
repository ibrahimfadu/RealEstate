from flask import Flask, request, jsonify
import csv
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
CSV_FILE = 'submissions.csv'

@app.route('/api/save-form', methods=['POST'])
def save_form():
    data = request.get_json()

    if not all(k in data for k in ("name", "email", "phone", "location")):
        return jsonify({"error": "Missing fields"}), 400

    file_exists = os.path.isfile(CSV_FILE)

    with open(CSV_FILE, mode='a', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=["name", "email", "phone", "location"])
        if not file_exists:
            writer.writeheader()
        writer.writerow(data)

    return jsonify({"message": "Saved successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
