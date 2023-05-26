import fetch from 'isomorphic-fetch'

export function getAllBlogData () {
  const encodedURI = encodeURI(`https://dummyjson.com/products`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.products)
    .catch((error) => {
      console.warn(error)
      return null
    });
}