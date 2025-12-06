export async function searchYoutubeMusic(weatherType) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${weatherType}&type=video&videoCategoryId=10&maxResults=1&key=${window.API_CONFIG.YOUTUBE_API_KEY}`);
    return await response.json();
}

export function parseYoutubeData(response) {
    return {
        track: response.items[0].snippet.title,
        videoId: response.items[0].id.videoId,
        url: `https://youtu.be/${response.items[0].id.videoId}`
    };
}
