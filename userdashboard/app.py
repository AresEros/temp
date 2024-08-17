from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample user data
USER_DATA = {
    'email': 'bruno@gmail.com',
    'password': 'password',
    'name': 'Bruno'
}

@app.route('/')defhome():
    return render_template('login.html')

@app.route('/login', methods=['POST'])deflogin():
    email = request.form['email']
    password = request.form['password']
    
    if email == USER_DATA['email'] and password == USER_DATA['password']:
        return redirect(url_for('dashboard'))
    else:
        return"Login details not valid"@app.route('/dashboard')defdashboard():
    returnf"Welcome to your dashboard, {USER_DATA['name']}!"if __name__ == '__main__':
    app.run(debug=True)
