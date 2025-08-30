'use strict';

// Emulate API request to retrieve user data
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // Set a 30% probability of error
            if (Math.random() < 0.3) {
                reject(`Error loading user ${userId}`);
            } else {
                resolve({ id: userId, name: `User ${userId}` });
            }
        }, 500);    // Delay 0.5 seconds to simulate a request
    });
}

// Main function for retrieving data from the userIds array
function getUsersData(userIds) {

    // Create an array of promises by calling fetchUserData for each userId
    const promises = userIds.map(id => fetchUserData(id));

    // Use Promise.allSettled to process all promises
    return Promise.allSettled(promises).then(results => {
        const success = [];
        const errors = [];

        // Iterate over the results of all promises
        results.forEach(result => {
            if (result.status === "fulfilled") {

                // If the promise was executed successfully, add the value to success
                success.push(result.value);
            } else {

                // If the promise ended with an error, add the reason to errors
                errors.push(result.reason);
            }
        });

        // Return an object with two arrays
        return { success, errors };
    });
}

// Usage example
const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds).then((result) => {
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
});
