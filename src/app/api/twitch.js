const getAT = async () => {
    fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: "client_credentials",
        })
    })
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((res) => {
        // console.log(res);
        console.log('we have a res')
    })
    .catch((err) => {
        console.error(err);
    })
}

export default async function areYouLive() {
    const channelName = 'hollyngrade'; // Replace with the channel name
    const clientId = process.env.TWITCH_CLIENT_ID; // Replace with your Client ID
    const appToken = process.env.TWITCH_APP_TOKEN; // Replace with your Access Token
    
    const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
        headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${appToken}`
        },
        cache: 'no-store',
    });

    if (!response.ok) {
        // throw new Error(`Twitch API error: ${response.statusText}`);
        console.log(`Twitch API error: ${response.statusText}`);
        return null;
    }

    const data = await response.json();
    return data.data;
}