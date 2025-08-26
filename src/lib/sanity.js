  import { createClient } from "@sanity/client";
  import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
  studioHost: import.meta.env.STUDIO_HOST,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

client
  .fetch(`*[_type == "product"]`)
  .then((res) => {
    console.log("Sanity connection successful ✅:", res);
  })
  .catch((err) => {
    console.error("Sanity connection failed ❌:", err.message);
  });

export default client;
export { client };