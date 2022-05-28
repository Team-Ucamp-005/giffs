import axios from "axios"

export const useAxios = async (input) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(input)}&limit=12&api_key=4FeGdflzRsCjDKZW4wKKThWZ74wkKx5r`
  const { data } = await axios.get(url)
  console.log(data.data)
  const gifs = data.data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  return gifs
}