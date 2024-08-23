document.getElementById('btn').addEventListener('click', function() {
    // Get the input value and convert it to a number
    const inputValue = parseFloat(document.getElementById('ip').value);

    // Create a promise that resolves after 2 seconds with the input value
    new Promise(resolve => {
        setTimeout(() => {
            document.getElementById('output').textContent = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    // Chain a promise to multiply the number by 2 after 1 second
    .then(result => {
        return new Promise(resolve => {
            setTimeout(() => {
                const multipliedValue = result * 2;
                document.getElementById('output').textContent = `Result: ${multipliedValue}`;
                resolve(multipliedValue);
            }, 1000);
        });
    })
    // Chain a promise to subtract 3 from the result after 1 second
    .then(result => {
        return new Promise(resolve => {
            setTimeout(() => {
                const subtractedValue = result - 3;
                document.getElementById('output').textContent = `Result: ${subtractedValue}`;
                resolve(subtractedValue);
            }, 1000);
        });
    })
    // Chain a promise to divide the result by 2 after 1 second
    .then(result => {
        return new Promise(resolve => {
            setTimeout(() => {
                const dividedValue = result / 2;
                document.getElementById('output').textContent = `Result: ${dividedValue}`;
                resolve(dividedValue);
            }, 1000);
        });
    })
    // Chain a promise to add 10 to the result after 1 second
    .then(result => {
        return new Promise(resolve => {
            setTimeout(() => {
                const addedValue = result + 10;
                document.getElementById('output').textContent = `Result: ${addedValue}`;
                resolve(addedValue);
            }, 1000);
        });
    })
    // Final step to display the final result
    .then(finalResult => {
        document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    // Handle any potential errors
    .catch(error => {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    });
});
