import requests
from flask import Flask, request, jsonify
import csv
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzwEKkdz3CVRea8qgaKbMBMkwdAp5Sdtk0su2cpJSCZv51pBbA6LlXXZ8ZnEZhHvYB3/exec"  # Replace with actual URL

@app.route('/api/save-form', methods=['POST'])
def save_form():
    data = request.get_json()

    # Validate required fields
    if not all(k in data for k in ("name", "email", "phone", "location")):
        return jsonify({"status": "error", "message": "Missing fields"}), 400

    try:
        # Send data to Google Sheets
        response = requests.post(GOOGLE_SHEET_WEBHOOK_URL, json=data)

        if response.status_code == 200:
            return jsonify({
                "status": "success",
                "message": "Saved successfully"
            }), 200
        else:
            return jsonify({
                "status": "error",
                "message": "Failed to save to Google Sheets"
            }), 500

    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True)
