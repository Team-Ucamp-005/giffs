import axios from "axios"

export const useAxios = async(input) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(input)}&limit=12&api_key=JApdZ2hq1K0gVHWbiIkhwu1MR6rqCfJ0`
  const res = await axios.get(url)

  const gifs = res.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  return gifs
}