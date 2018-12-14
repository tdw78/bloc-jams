//Album Component
import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
     super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false
    };

     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;
 }

    play() {
       this.audioElement.play();
       this.setState({ isPlaying: true });
       this.setState({ album.song[0]: album.song.ion-pause });
    }

    pause() {
       this.audioElement.pause();
       this.setState({ isPlaying: false)};
       this.setState({ album.song[0]: album.song.ion-play });
     }

     setSong(song) {
       this.audioElement.src = song.audioSrc;
       this.setState({ currentSong: song });
     }

     handleSongClick(song) {
       const isSameSong = this.state.currentSong === song;
       if (this.state.isPlaying && isSameSong) {
             this.pause();
           } else {
             if (!isSameSong) { this.setSong(song); }
             this.play();
           }
      }

     handleSongHover(song, index){
       if(this.state.isPlaying: false){
         this.setState({ album.song[0]: album.song.ion-play });
       }
     }

     handleSongLeave(song, index){
       if(this.state.isPlaying: false){
         this.setState({ album.song.ion-play: album.song[0] });
      }
    }

  render() {
    return (
      <section className="album">
        <section id="album-info">
           <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
           <div className="album-details">
           <h1 id="album-title">{this.state.album.title}</h1>
           <h2 className="artist">{this.state.album.artist}</h2>
           <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>
         <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>
           <tbody>
           {
             this.state.album.songs.map( (song, index) =>
                <tr className="song" key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.handleSongHover(song)} onMouseLeave={() => this.handleSongLeave(song)} >
                  <td>{album.song[index + 1]}</td>
                  <span className="ion-play"></span>
                  <span className="ion-pause"></span>
                  <td>{album.song.title}</td>
                  <td>{album.song.duration}</td>
               </tr>
             )
           }
           </tbody>
         </table>
      </section>
    );
  }
}

export default Album;
