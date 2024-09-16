![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)


### Learning Goals:

The aim of this lab is to use `axios` and fetch data from an external api.

Use the following code - to fetch the api:

`axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})`

***NOTE:*** The above piece of code is not enough to get data from the given api, you need to use `.then` in order to resolve the `promise` into the API's response.
If there is any error -> print that error on console.
If the status code === 404: then display as shown below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-api-error-ss.png)

(**You can experiment this by giving a wrong url like given in the picture 'book' without 's'**)

The above exercise will help you to play around error handling through axios.


### Steps to follow:

1. Create a new react app. Name it as `react-api`
2. Display the following content by fetching the data, from the above given api.

    1. Title of the book
    2. Image of the book (in the given api --> there are two image links --> you can use any-one)
    3. Descripition of the book
    4. Authors of the book

Here is demo of the final output:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-api-books.gif)

Happy Coding ❤️!