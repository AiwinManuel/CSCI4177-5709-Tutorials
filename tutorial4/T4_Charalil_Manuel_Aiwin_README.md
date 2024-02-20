# Tutorial 4


* *Date Created*: 19 FEB 2024
* *Last Modification Date*: 19 FEB 2024
* *T4 Lab URL*: https://git.cs.dal.ca/acmanuel/csci4177-5709-tutorials
* *T4 Git URL*: https://github.com/AiwinManuel/CSCI4177-5709-Tutorials
* *T4 Production domain*: https://meek-crostata-4bb1ff.netlify.app/




## Authors


* [Aiwin Charalil Manuel](aw380590@dal.ca) - *(Owner)*



## Built With

* [React.Js](https://react.dev/learn) - The  Framework used
* [JavaScript](https://www.javascript.com/learn/strings) - The Backend used




## Sources Used


### LoginPage.js 

*Lines 25 - 28

```
const response = await axios.post('https://express-t4.onrender.com/api/login', loginDetails, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

```

The code above was created by adapting the code in [Logrocket.com](https://blog.logrocket.com/how-to-use-axios-post-requests/) as shown below: 

```
axios.post(url[, data[, config]])

```

- <!---How---> The code in [LoginPage] was implemented by...
- <!---Why---> [Logrocket.com](https://blog.logrocket.com/how-to-use-axios-post-requests/)'s Code was used because to get the undrstanding of how post requests for axioms are send.

### ProfileListingPage.js 

*Lines 14 - 15

```
const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
```

The code above was created by adapting the code in [Logrocket.com](https://blog.logrocket.com/how-to-use-axios-post-requests/) as shown below: 

```
axios.post(url[, data[, config]])

```

- <!---How---> The code in [ProfileListingPage] was implemented by...
- <!---Why---> [Logrocket.com](https://blog.logrocket.com/how-to-use-axios-post-requests/)'s Code was used because to get the undrstanding of how post requests for axioms are send.

### ProfileDetailsPage.js 

*Lines 25 - 28

```
const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        setUserDetails(response.data);

```

The code above was created by adapting the code in [Logrocket.com](https://blog.logrocket.com/how-to-use-axios-post-requests/) as shown below: 

```
axios.post(url[, data[, config]])

```

- <!---How---> The code in [ProfileDetailsPage.js] was implemented by...
- <!---Why---> [Logrocket.com](https://blog.logrocket.com/how-to-use-axios-post-requests/)'s Code was used because to get the undrstanding of how post requests for axioms are send.


### ProfileListingPage.js 

*Lines 23 - 25

```
const filteredUsers = searchTerm
    ? users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : users;
```

The code above was created by adapting the code in [medium.com](https://medium.com/@glasshost/how-to-filter-an-array-of-objects-in-react-51efa11ee49) as shown below: 

```
const handleFilter = (event) => {
  const value = event.target.value;
  const filtered = users.filter(user => user.name.includes(value));
  setFilteredUsers(filtered);
};

```

- <!---How---> The code in [ProfileListingPage.js] was implemented by...
- <!---Why---> [medium.com](https://medium.com/@glasshost/how-to-filter-an-array-of-objects-in-react-51efa11ee49)'s Code was used because understand filtering data in react.

