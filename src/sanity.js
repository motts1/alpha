// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "qu2nwquy",
  dataset: "kcj",
  useCdn: true // `false` if you want to ensure fresh data
})