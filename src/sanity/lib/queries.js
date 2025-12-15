import { client } from "@/sanity/lib/client";

export async function getRealizations() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    location,
    mainImage,
    "imageUrl": mainImage.asset->url
  }`;
  return client.fetch(query);
}

export async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "imageUrl": mainImage.asset->url,
    body
  }`;
  return client.fetch(query);
}

export async function getGalleryImages() {
  const query = `*[_type == "project"] {
    _id,
    title,
    "mainVideo": video.asset->{
      _id,
      url,
      mimeType
    },
    gallery[]{
      _type,
      asset->{
        _id,
        url,
        mimeType
      }
    }
  }`;
  return client.fetch(query);
}

export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    location,
    mainImage,
    "imageUrl": mainImage.asset->url,
    gallery[]{
        asset->{
            _id,
            url
        }
    },
    description,
    video
  }`;
  return client.fetch(query, { slug });
}

export async function getVideos() {
  const query = `*[_type == "project" && defined(video)] | order(_createdAt desc) [0...3] {
    _id,
    title,
    slug,
    "videoUrl": video.asset->url
  }`;
  return client.fetch(query);
}

export async function getHomepageGallery() {
  const query = `*[_type == "homepage"][0] {
    showcaseGallery[]{
      _key,
      _type,
      "url": asset->url,
      "mimeType": asset->mimeType
    }
  }`;
  return client.fetch(query);
}

export async function getPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "imageUrl": mainImage.asset->url,
    body
  }`;
  return client.fetch(query, { slug });
}
