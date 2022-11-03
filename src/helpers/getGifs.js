export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=HJYAZ9z2ETwsZqJQ0HrbakEUm7rlBd8q&q=${category}&limit=12`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  }));

  return gifs;
};
