from flask import Flask, request, jsonify
import uuid

app = Flask(__name__)

# Simulating a database with a list
users = []

# GET all users
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify({
        'message': 'Users retrieved',
        'success': True,
        'users': users
    })

# POST a new user
@app.route('/add', methods=['POST'])
def add_user():
    data = request.get_json()
    new_user = {
        'id': str(uuid.uuid4()),
        'email': data.get('email'),
        'firstName': data.get('firstName')
    }
    users.append(new_user)
    return jsonify({'message': 'User added', 'success': True}), 201

# PUT to update an existing user
@app.route('/update/<string:id>', methods=['PUT'])
def update_user(id):
    data = request.get_json()
    for user in users:
        if user['id'] == id:
            user['email'] = data.get('email', user['email'])
            user['firstName'] = data.get('firstName', user['firstName'])
            return jsonify({'message': 'User updated', 'success': True})
    return jsonify({'message': 'User not found', 'success': False}), 404

# GET a single user by ID
@app.route('/user/<string:id>', methods=['GET'])
def get_user(id):
    user = next((user for user in users if user['id'] == id), None)
    if user:
        return jsonify({'success': True, 'user': user})
    else:
        return jsonify({'message': 'User not found', 'success': False}), 404

if __name__ == '__main__':
    app.run(debug=True)
