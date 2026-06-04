const reportError = (errorMessage) => {
    fetch('https://ntfy.sh/hollyngrade-errors', {
        method: 'POST', // PUT works too
        body: `${errorMessage}`,
        headers: {
            'Title': 'Error on hollyngrade.com',
            // 'Priority': 'normal',
            'Tags': 'warning,facepalm'
        }
    })
    .then(response => {
        if (!response.ok) {
            // This is where you catch the 400 error
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data); // message sent to meee
    })
    .catch(error => {
        console.error('Error Details:', error.message);
        throw error;
    })
    .finally(() => {
        return 'error';
    });
}

export default reportError;