
export const convertToSlug = val => 
  val.trim().toLowerCase().replace(/\s+/g, "_").replace(/\//g, "_");
