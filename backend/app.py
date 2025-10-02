from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Backend is running!"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Backend is running!"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
