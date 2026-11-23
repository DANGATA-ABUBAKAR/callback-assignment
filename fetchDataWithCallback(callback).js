function fetchDataWithCallback(callback) {
    setTimeout(() => {
        try {
            // Set to true to test error output, or false for successfull;s output
            let error = false;

            if (error) {
                throw new Error("Fetch failed");
            }

            // If Sucxcessfull
            callback("Data fetched");
        } catch (err) {
            console.error("Error: " + err.message);
        }
    }, 2000);
}

fetchDataWithCallback((result) => {
    console.log(result);
});