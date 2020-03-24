import preloadImage from './preloadImage';

export const getCatImage = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
  const data = await response.json();
  const { url } = data[0];

  await preloadImage(url);

  return url

};
