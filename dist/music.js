class musicApp {

  constructor () {
  }

    

  async getSongData (song, singer) {
    const songInfo = await $.get(`/music/?singer=${singer}&song=${song}`) 
    if (songInfo) {
      this.songData = songInfo     
    }

   async getTranslated(song,singer,to) {
        const text = await $.get(`/translate/?singer=${singer}&song=${song}&to=${to}`) 
        if (text) {
              this.translatedText = text
         }
    }

}