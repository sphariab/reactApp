This is simple react app.

Steps to up the app:

- npm install
- npm install -g json-server
- json-server --watch db.json --port 3004  (to up static JSON server on http://localhost:3004//employees)
- go to http://localhost:3004/employees
- webpack (makes bundle.js)
- npm start (to run webpack and hot update)

On home route / - data fetches from the provided API (I started to fetch users from position 0 to 10 - http://localhost:3004/employees?_start=0&_end=10 endpoint),
data saves into a Redux Store and renders.

A sorting button (sort by id) sorts data field by id in ascending and descending order
Prev, next buttons fetching next or previous 10 users on click

On about route /about - shows static about page

