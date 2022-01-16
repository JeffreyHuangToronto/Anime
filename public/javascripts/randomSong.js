function getRandom() {
  fetch("https://api.aniapi.com/v1/random/song/1", {
    "method": "GET",
    "headers": {}
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var random = data

      // Add it to the page
      var list = document.getElementById("list")
      list.style.textAlign = "center"
      for (var i = 0; i < 1; i++) {
        console.log(i);
        var listContainer = document.createElement("div")
        listContainer.id = "ranime"
        // listContainer.style.textAlign = "center"
       

        list.appendChild(listContainer)

        let animeData = random.data[i]

        let name = document.createElement("h1")
        name.innerHTML = animeData.title
        name.id = "nameid"
        listContainer.appendChild(name)

        // The Link to the anime
        let link = document.createElement("a")
        let aniListImg = document.createElement("img")
        aniListImg.id = "logo"
        aniListImg.src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        aniListImg.width = 100
        aniListImg.height = 50

        link.href = animeData.open_spotify_url
        link.appendChild(aniListImg)

        listContainer.appendChild(link)

        // for (let i = 0; i < genre.length; i++) {
        //   genrediv.appendChild(genre[i])
        //   let br = document.createElement("br")
        //   genrediv.appendChild(br)
        // }

        //Start-End Date

      }

      //https://aniapi.com/docs/
      //   let sampleData = {
      //     "status_code": 200,
      //     "message": "1 random anime found",
      //     "data": [
      //         {
      //             "anilist_id": 127888,
      //             "mal_id": 45616,
      //             "format": 2,
      //             "status": 0,
      //             "titles": {
      //                 "en": "WAKAME BUILDINGS",
      //                 "jp": "WAKAME BUILDINGS"
      //             },
      //             "descriptions": {
      //                 "en": "Short film by Koujirou Shishido."
      //             },
      //             "start_date": "2007-07-25T00:00:00Z",
      //             "end_date": "2007-07-25T00:00:00Z",
      //             "season_period": 4,
      //             "episodes_count": 1,
      //             "episode_duration": 1,
      //             "trailer_url": "https://www.youtube.com/embed/RBRyCq0zkjw",
      //             "cover_image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127888-0FbEsvM83Uy5.png",
      //             "genres": [
      //                 "Music"
      //             ],
      //             "score": 0,
      //             "id": 7838
      //         }
      //     ],
      //     "version": "1"
      // }


      //   console.log(animeData.titles.en);
      //   name.title = data[0]
      // document.getElementsByTagName('list')[0].appendChild(listContainer);
      // listContainer.appendChild(listElement);

    })
    .catch(err => {
      console.error(err);
    });
}
