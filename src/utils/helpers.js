import csv2json from 'csvjson-csv2json';

export const convertToSlug = val => 
  val.trim().toLowerCase().replace(/\s+/g, "_").replace(/\//g, "_");

export const convertFile = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => resolve(csv2json(reader.result));
    reader.onerror = error => reject(error);
  });
