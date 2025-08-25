import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2025-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Fetch all products
export async function getProducts() {
  try {
    const query = `*[_type == "product"]{
      _id,
      name,
      price,
      description,
      "imageUrl": images[0].asset->url
    }`;

    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Fetch a single product by ID
export async function getProductById(id) {
  try {
    const query = `*[_type == "product" && _id == $id][0]{
      _id,
      name,
      price,
      description,
      images[]{
        "url": asset->url
      }
    }`;

    const product = await client.fetch(query, { id });
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default client;
