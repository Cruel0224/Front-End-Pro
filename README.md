
DZ 50. Fake api

You have a function fetchUserData(userId) that returns a promise with user data (emulating an API request).
You need to write a function getUsersData(userIds) that:

- Accepts an array of userIds.
- Returns a <strong>promise</strong> that resolves to an array of user objects.
- If at least one request ends with an error, the result should return an <strong>array of successful responses and an array of errors.</strong>

<strong>Example call:</strong>

const userIds = [1, 2, 3, 4, 5];
getUsersData(userIds).then((result) => {
console.log("✅ Success:", result.success);
console.log("❌ Errors:", result.errors);
});

<strong>Tips:</strong>

- Use Promise.allSettled.
- Divide the results into fulfilled and rejected.
