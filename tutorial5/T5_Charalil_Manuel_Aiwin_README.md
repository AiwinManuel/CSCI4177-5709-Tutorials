# Tutorial 5


* *Date Created*: 09 MAR 2024
* *Last Modification Date*: 11 MAR 2024
* *T5 Lab URL*: https://git.cs.dal.ca/acmanuel/csci4177-5709-tutorials
* *T5 Git URL*: https://github.com/AiwinManuel/CSCI4177-5709-Tutorials
* *T5 Production domain*: 




## Authors


* [Aiwin Charalil Manuel](aw380590@dal.ca) - *(Owner)*



## Built With

* [python](https://www.python.org/) - The Backend used
* [Flask](https://flask.palletsprojects.com/en/3.0.x/quickstart/) - The Framework used




## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.


### app.py 

*Lines 10 - 16*
```
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify({
        'message': 'Users retrieved',
        'success': True,
        'users': users
    }) 

```

The code above was created by adapting the code in [flask palletsprojects](https://flask.palletsprojects.com/en/3.0.x/quickstart/) as shown below: 

```
from flask import request

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()

```

- <!---Why---> [flask palletsprojects](https://flask.palletsprojects.com/en/3.0.x/quickstart/)'s Code was used because to learn how routing works in flask 


