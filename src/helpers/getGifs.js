


export const getGifs = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=15&api_key=sX0xYbW0vvo21rUtji2jNvhg5JPY6yWO`
    const resp = await fetch(url);
    const data = await resp.json();

    const gifs = data.data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })


 return gifs;
}