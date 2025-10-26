**DZ 63. Add post edit**


Taking the files from the lesson as a basis, you need to add post editing.

There should be a form like on the Create Post page

You should go to it by clicking on the Edit button in the table

After going to the edit page, you need to load the data about the post, as is done on the View page

After that, you need to insert the loaded data into the form fields and enable editing

When the user submits the form, you need to send a put request to the server


fetch('https://jsonplaceholder.typicode.com/posts/1', {\n
  method: 'PUT',\n
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));




Be sure to include the body of the request, it should be like in the example with the post request

Further workflow after the request is the same as on the Create Post page

The doc on the ari is here https://jsonplaceholder.typicode.com/guide/
