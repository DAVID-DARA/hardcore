import client from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Fetch all products
export async function getProducts() {
  try {
    const query = `*[_type == "product"] | order(_createdAt desc){
      _id,
      name,
      price,
      description,
      slug,
      image,       // ✅ full image object
      images[]     // ✅ optional array of images
    }`;

    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Fetch product by slug
export async function getProductBySlug(slug) {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      price,
      description,
      slug,
      image,
      images[]
    }`;

    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default client;
