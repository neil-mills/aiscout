const fetch = require('isomorphic-fetch')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetchInstagramMedia = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const accessToken =
    'IGQVJXTGtLRlAzcFBIQjBQbEh6bUVIVEMxdXNGdmJfU1FPREpZATi1oLThaUkNXSUhHQlNjUVFRbkNHdWg0VmphY0JZAbHlXcTNCU3ZAabDhreHZANRjUyZA29DUmc3cktFWGkzWHI2Y3Bn' //long term access token
  //refresh the access token
  await fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`
  )
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id&access_token=${accessToken}`
  )
  const { data } = await response.json()
  const feed = Array.from(data).filter((item, i) => i < 9)

  for (const item of feed) {
    const res = await fetch(
      `https://graph.instagram.com/${item.id}?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
    )
    const image = await res.json()
    const nodeMeta = {
      id: createNodeId(`beer-${item.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'InstagramImage',
        mediaType: 'application/json',
        contentDigest: createContentDigest(image),
      },
    }
    actions.createNode({
      ...image,
      ...nodeMeta,
    })
  }
}

const sourceNodes = async params => {
  await Promise.all([fetchInstagramMedia(params)])
}

module.exports = { sourceNodes }
