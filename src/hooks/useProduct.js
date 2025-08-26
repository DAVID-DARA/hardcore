import { useEffect, useState } from "react";
import { getProductBySlug } from "../services/productService";

export default function useProduct(slug) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      try {
        const data = await getProductBySlug(slug);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  return { product, loading };
}
