class AnimeShow {
  constructor(imageUrl, title, id) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.id = id;
  }
}

function depupe(list) {
  const data = list.reduce((acc, show) => {
    if (!acc[show.id]) {
      acc[show.id] = show;
    }
    return acc;
  }, {});
  return Object.entries(data).map(([_key, show]) => show);
}

export async function fetchTopAnimes(filter = "airing") {
  const animeRes = await fetch(
    `https://api.jikan.moe/v4/top/anime?limit=10&filter=${filter}`,
  );
  const animeJson = await animeRes.json();
  return depupe(
    animeJson.data.map((showData) => {
      return new AnimeShow(
        showData.images.jpg.image_url,
        showData.title_english,
        showData.mal_id,
      );
    }),
  );
}
