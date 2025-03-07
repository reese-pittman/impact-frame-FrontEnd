class AnimeShow {
  constructor(imageUrl, title, id) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.id = id;
  }
}

// this will get the user recent watch history of shows that have not been finished yet
// Since i do not have this api yet this folder will not be used
export async function fetchShowHistory() {
  const tempShowList = await fetch(api);
  const showList = await tempShowList.json();
}
