
function Song(title, artist, genre, year)
{
   this.title = title;
   this.artist = artist;
   this.genre = genre;
   this.year = year;
}

var song1 = '{"title":"Shape of You","artist":["Ed Sheeran"],"genre":["Pop"],"year":2017}'
var song2 = '{"title":"Old Town Road","artist":["Lil Nas X"],"genre":["Rap"],"year":2019}'
var song3 = '{"title":"Baby","artist":["Justin Bienber"],"genre":["Pop"],"year":2010}'
var song4 = '{"title":"Sir Duke","artist":["Stevie Wonder"],"genre":["Jazz"],"year":1976}'
var song5 = '{"title":"Sicko Mode","artist":["Kendrick Lamar"],"genre":["Rap"],"year":2018}'
var song6 = '{"title":"Careless Whisper","artist":["George Michael"],"genre":["Jazz"],"year":1984}'
var song7 = '{"title":"We Are the Champions","artist":["Queen"],"genre":["Rock"],"year":1977}'
var song8 = '{"title":"Take the A Train","artist":["Duke Ellington"],"genre":["Jazz"],"year":1952}'
var song9 = '{"title":"The Sound of Silence","artist":["Duke Ellington"],"genre":["Folk"],"year":1964}';
var song10 = '{"title":"Mrs. Robinson","artist":["Simon and Garfunkel"],"genre":["Folk"],"year":1968}';

var songListJSON = new Array(song1, song2, song3, song4, song5,
                             song6, song7, song8, song9, song10);
var songList = new Array();

for (i = 0; i < songListJSON.length; i++) {
  songList.push(JSON.parse(songListJSON[i]));
}

function buildSonglistSerialized()
{
  for (i = 0; i < songListJSON.length; i++)
    document.write(songListJSON[i] + "<br>");
}

function buildSongListTable()
{
  var myTable = "<table><tr><th>Title</th><th>Artist</th><th>Genre</th><th>Year</th></tr>";
  for (i = 0; i < songList.length; i++) {
      myTable += "<tbody class='"+ songList[i]["genre"] + "'>";
      myTable += "<tr class='" + songList[i]["genre"] + "'>";
      myTable += "<td>" + songList[i]["title"] + "</td>";
      myTable += "<td>" + songList[i]["artist"] + "</td>";
      myTable += "<td>" + songList[i]["genre"] + "</td>";
      myTable += "<td>" + songList[i]["year"] + "</td>";
      myTable += "</tr>";
      myTable += "</tbody>";
  }
  myTable += "</table>";
  document.write(myTable);
}



