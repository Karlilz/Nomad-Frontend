const URL="https://nomad-vt3u.onrender.com"
// const URL ="ttp://localhost:4000"

// TRAVEL BLOG LOADER
export const travelBlogLoader = async () => {
  const response = await fetch(URL+'/post')
  const travelblog = await response.json()
  console.log(travelblog); 
  return travelblog
}

// SHOW LOADER 
export const showLoader = async ({params}) => {
    const res = await fetch(URL+'/travelblog/' + params.id)
    const travelblog = await res.json()
    console.log(travelblog); 
    return travelblog;
  }
