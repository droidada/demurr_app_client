
export const convertToSlug = val => 
  val.trim().toLowerCase().replace(/\s+/g, "_").replace(/\//g, "_");
  
export const checkDateValidity = (date1, date2) => {
  const invalid = "Invalid Date";
  if (new Date(date1) === invalid || new Date(date2) === invalid) {
    return false;
  }
  const diff = new Date(date2).getTime() - new Date(date1).getTime();
  return diff / (1000*60*60*24) + 1;
}
