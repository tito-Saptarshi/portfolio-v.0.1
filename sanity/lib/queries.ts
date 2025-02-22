import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)]  | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  views,
  description,
  category,
  image,
}`);