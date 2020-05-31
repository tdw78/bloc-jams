//Library Component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }

  render() {

    const styles = {
      color: "#563E37",
      fontSize: 19,
      fontWeight: "bold",
    }

    const imageStyle = {
      height: 250,
      width: 425,
      paddingTop: 30,
    }

   return (
     <section className='library'>
       {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
              <img class="rounded"  style={imageStyle} src={album.albumCover} alt={album.title} />
              <div style={styles}>{album.title}</div>
              <div style={styles}>{album.artist}</div>
              <div style={styles}>{album.songs.length} songs</div>
            </Link>
          )
        }
     </section>
    );
  }
}

export default Library;
