import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'cwyso91k',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-01-01',
})

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);

export default client;
