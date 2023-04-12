<h1>Centuś A Simple Tool to Manage Your Finances</h1>

<h3>About a backend</h3>

<p>This is one of my mini project built to practice knowledge I got in online courses. It's using Nodejs as a backend an Express framework to be exact and Mongoose ORM.
  Backend is devided on controllers, routes and models.
For a storage this app includes MongoDB database with Mongoose. Authentication is based on JsonWebToken and saves user token in local storage to make it easy to access
token in the Frontend of the app and be able to authorize request</p>

<h3>About a Frontend</h3>
<p>On Frontend im using React. The more advanced pieces of logic are in custom hooks for example: useLogin hook, useSignup hook, useExpensesContext and useAuthContext.
Auth Context is used to authenticate app. In this context we get user object which contains user email and token. Based on this I guard routes and protect unauthorized request. Expenses Context is used because of need to have a live preview of our expenses and not be obligated to reload the page everytime we add, delete or update an expense. It fetches expenses from a backend REST API using axios library.</p>
