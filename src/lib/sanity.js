// src/lib/sanity.js
import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// Отримуємо змінні з .env
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2023-01-01";

// Перевірка налаштувань
console.log("🔵 Sanity Config:", { projectId, dataset, apiVersion });

if (!projectId || projectId === "your_project_id") {
  console.error("❌ ERROR: VITE_SANITY_PROJECT_ID не налаштовано в .env.local");
  console.error("   Додай свій реальний projectId з sanity.io");
}

// Створюємо клієнт
const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true, // Використовує CDN для швидкості
});

const imageBuilder = createImageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) {
    console.warn("⚠️ No image source provided");
    return imageBuilder.image("").url() || "";
  }

  return imageBuilder.image(source);
};

// 1. Отримати всі проекти
export const getAllProjects = async () => {
  try {
    const query = `*[_type == "project"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      coverImage,
      category,
      date,
      location,
      client,
      description,
      featured,
      "galleryCount": count(gallery)
    }`;

    const projects = await client.fetch(query);
    console.log(`🔵 Loaded ${projects?.length || 0} projects from Sanity`);
    return projects || [];
  } catch (error) {
    console.error("❌ Error fetching projects:", error);
    return [];
  }
};

// 2. Отримати один проект по slug
export const getProjectBySlug = async (slug) => {
  try {
    const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      coverImage,
      gallery[] {
        ...,
        "url": asset->url,
        "dimensions": asset->metadata.dimensions
      },
      category,
      date,
      location,
      client,
      description,
      featured
    }`;

    const project = await client.fetch(query, { slug });
    console.log(`🔵 Loaded project: ${project?.title || "Not found"}`);
    return project;
  } catch (error) {
    console.error("❌ Error fetching project:", error);
    return null;
  }
};

// 3. Отримати проекти по категорії
export const getProjectsByCategory = async (category) => {
  try {
    if (category === "all") {
      return await getAllProjects();
    }

    const query = `*[_type == "project" && category == $category] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      coverImage,
      category,
      date,
      featured
    }`;

    return (await client.fetch(query, { category })) || [];
  } catch (error) {
    console.error("❌ Error fetching projects by category:", error);
    return [];
  }
};

// 4. Отримати вибрані проекти
export const getFeaturedProjects = async () => {
  try {
    const query = `*[_type == "project" && featured == true] | order(order asc)[0...6] {
      _id,
      title,
      "slug": slug.current,
      coverImage,
      category,
      date
    }`;

    return (await client.fetch(query)) || [];
  } catch (error) {
    console.error("❌ Error fetching featured projects:", error);
    return [];
  }
};

export default client;
