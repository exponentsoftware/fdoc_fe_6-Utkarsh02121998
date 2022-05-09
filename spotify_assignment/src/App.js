import React, { Component } from "react";
import Albums from "./Components/Albums.js";

class App extends Component {
  state = {
    albums: [
      {
        id: 0,
        artist: "Atif aslam",
        album: "Ajab prem ki gajab kahani",
        albumCover:
          "https://1.bp.blogspot.com/-Ujn-2VE3aVY/X3XKo6c77dI/AAAAAAAACcY/oT9j1LTABXAoW5VUC9Yn8T1S4GACBeffwCLcBGAsYHQ/s1600/Tu%2BJaane%2BNa%2BLyrics%2B-%2BAJAB%2BPREM%2BKI%2BGHAZAB%2BKAHANI%2B-%2BAtif%2BAslam.jpg",
        songs: "",
      },
      {
        id: 1,
        artist: "A.R.Rehman",
        album: "Rang De Basanti",
        albumCover:
          "https://i.pinimg.com/564x/c0/d7/1a/c0d71a26ff8611ed6ea66392c6edb593.jpg",
        songs: "",
      },
      {
        id: 2,
        artist: "Javed ali",
        album: "Pushpa the rise-01",
        albumCover:
          "https://i.ytimg.com/vi/hcMzwMrr1tE/maxresdefault.jpg",
        songs: "",
      },
      {
        id: 3,
        artist: "",
        album: "Highway",
        albumCover:
          "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/highway-et00014920-17-06-2020-12-28-06.jpg",
        songs: "",
      },
      {
        id: 4,
        artist: "A.R. Rahman",
        album: "Ranjhana",
        albumCover: "https://i.ytimg.com/vi/lfmYmTpIH4o/movieposter.jpg",
        songs: "",
      },
      {
        id: 5,
        artist: "Alka yagnik and atif aslam",
        album: "Kismat Konnection",
        albumCover: "https://s2.dmcdn.net/v/7n1zP1LVAkab6CjrW/x1080",
        songs: "",
      },
    ],
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="albums">
            <h1 className="album-heading">Albums</h1>
            <Albums albums={this.state.albums} artist={this.state.artist} />
          </div>
        </div>
      </>
    );
  }
}

export default App;