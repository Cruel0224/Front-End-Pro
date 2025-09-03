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
        }, 500); // Delay 0.5 seconds to simulate a request
    });
}

// Main function for retrieving data from the userIds array
async function getUsersData(userIds) {
    // Create an array of promises
    const promises = userIds.map(id => fetchUserData(id));

    // Wait for all promises to settle
    const results = await Promise.allSettled(promises);

    // Divide into success and errors
    const success = [];
    const errors = [];
    for (const result of results) {
        if (result.status === "fulfilled") {
            success.push(result.value);
        } else {
            errors.push(result.reason);
        }
    }
    return { success, errors };
}

// Usage example
(async () => {
    const userIds = [1, 2, 3, 4, 5];
    const result = await getUsersData(userIds);
    console.log("✅ Success:", result.success);
    console.log("❌ Errors:", result.errors);
})();
