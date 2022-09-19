import { createClient } from "contentful";

export async function getProjects() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    host: "preview.contentful.com",
  });

  try {
    return client.getEntries({
      content_type: "jobs",
      select: "fields",
    });
  } catch (error) {
    console.error(error);
  }
}
