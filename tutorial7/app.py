from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
import os
import uuid

app = Flask(__name__)

# Use an environment variable for the MongoDB URI
mongo_uri = os.environ.get('MONGO_URI')
client = MongoClient(mongo_uri)

db = client['user_database']
users_collection = db['users']

@app.route('/users', methods=['GET'])
def get_users():
    users = list(users_collection.find({}, {'_id': 0}))
    return jsonify({
        'message': 'Users retrieved',
        'success': True,
        'users': users
    })

@app.route('/add', methods=['POST'])
def add_user():
    data = request.get_json()
    new_user = {
        'id': str(uuid.uuid4()),
        'email': data.get('email'),
        'firstName': data.get('firstName')
    }
    users_collection.insert_one(new_user)
    return jsonify({'message': 'User added', 'success': True}), 201

@app.route('/update/<string:id>', methods=['PUT'])
def update_user(id):
    data = request.get_json()
    result = users_collection.update_one(
        {'id': id},
        {'$set': {
            'email': data.get('email'),
            'firstName': data.get('firstName')
        }}
    )
    if result.modified_count > 0:
        return jsonify({'message': 'User updated', 'success': True})
    else:
        return jsonify({'message': 'User not found or data unchanged', 'success': False}), 404

@app.route('/user/<string:id>', methods=['GET'])
def get_user(id):
    user = users_collection.find_one({'id': id}, {'_id': 0})
    if user:
        return jsonify({'success': True, 'user': user})
    else:
        return jsonify({'message': 'User not found', 'success': False}), 404

@app.route('/delete/<string:id>', methods=['DELETE'])
def delete_user(id):
    result = users_collection.delete_one({'id': id})
    if result.deleted_count > 0:
        return jsonify({'success': True, 'message': 'User deleted'})
    else:
        return jsonify({'success': False, 'message': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
