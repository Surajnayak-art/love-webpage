from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    love_percentage = 100  # You can calculate or set this value dynamically
    return render_template('index.html', love_percentage=love_percentage)

if __name__ == '__main__':
    app.run(debug=True)
