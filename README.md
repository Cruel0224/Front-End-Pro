
DZ 50. Fake api

You have a function fetchUserData(userId) that returns a promise with user data (emulating an API request).
You need to write a function getUsersData(userIds) that:

- Accepts an array of userIds.
- Returns a <strong>promise</strong> that resolves to an array of user objects.
- If at least one request ends with an error, the result should return an <strong>array of successful responses and an array of errors.</strong>

<strong>Example call:</strong>

const userIds = [1, 2, 3, 4, 5];<br>
getUsersData(userIds).then((result) => {<br>
console.log("✅ Success:", result.success);<br>
console.log("❌ Errors:", result.errors);<br>
});

<strong>Tips:</strong>

- Use Promise.allSettled.
- Divide the results into fulfilled and rejected.
