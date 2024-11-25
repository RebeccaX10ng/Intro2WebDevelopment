const data = [
  {
    "title": "Bad Mode",
    "color": "#d9c5c3",
    "image": "https://media.pitchfork.com/photos/620a8ee91038e82f029e3a5d/1:1/w_320,c_limit/100000x100000-999.jpeg",
    "items": [
      {
        "intro": "Author：",
        "links": [
          { "text": "Hikaru Utada", "url": "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2" },

        ]
      },
      {
        "intro": "Genre：",
        "content": "Pop, R&B, Electronica"
      }, {
        "intro": "Leading Singles：",
        "links": [{ "text": "Bad Mode", "url": "https://open.spotify.com/track/3TxjMrMGWFP0jkIy0tVvVn" },
        { "text": "One Last Kiss", "url": "https://open.spotify.com/track/6DaKMsQDmHMJbKYyU7AUFA" }
        ]
      }, {
        "intro": "Language: ",
        "content": "Japanese and English"

      },
      {
        "intro": "Best time to listen: ",
        "content": "Rainy days Feeling down/ Literally 'Not in the mood'"

      }
    ]
  },
  {
    "title": "834.194",
    "color": "#d9c5c3",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/83/ab/69/83ab69ab-265b-d5c5-cca3-3ad62d4e8be2/VICL-65194.jpg/592x592bb.webp",
    "items": [
      {
        "intro": "Author：",
        "links": [
          { "text": "Sakanaction", "url": "https://open.spotify.com/artist/0hCWVMGGQnRVfDgmhwLIxq" },

        ]
      },
      {
        "intro": "Genre：",
        "content": "Electropop, Pop rock"
      }, {
        "intro": "Leading Singles：",
        "links": [{ "text": "Wasurerarenaino", "url": "https://open.spotify.com/track/7a3LbQFgp7NCuNcGlTgSsN" },
        { "text": "Shin Takara Jima", "url": "https://open.spotify.com/track/4a48lWUd64bZgHUDx0GZlj" }
        ]
      }, {
        "intro": "Language: ",
        "content": "Japanese"

      },
      {
        "intro": "Best time to listen: ",
        "content": "Feeling groovy/ Want to sway to the music"

      }
    ]
  }, {
    "title": "Random Access Memories",
    "color": "#d9c5c3",
    "image": "https://media.pitchfork.com/photos/63f641d801dbe796fab80055/1:1/w_320,c_limit/Daft-Punk-Random-Access-Memories.jpg",
    "items": [
      {
        "intro": "Author：",
        "links": [
          { "text": "Daft Punk", "url": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi" },

        ]
      },
      {
        "intro": "Genre：",
        "content": "Disco, Funk, Electronic, Soft Rock"
      }, {
        "intro": "Leading Singles：",
        "links": [{ "text": "Get Lucky", "url": "https://open.spotify.com/track/69kOkLUCkxIZYexIgSG8rq" },
        { "text": "Touch", "url": "https://open.spotify.com/track/7oaEjLP2dTJLJsITbAxTOz" }
        ]
      }, {
        "intro": "Language: ",
        "content": "English"

      },
      {
        "intro": "Best time to listen: ",
        "content": "Want to GET LUCKY/ At a dancing party"

      }
    ]
  }, {
    "title": "Persona 5 Royal: Original Soundtrack",
    "color": "#d9c5c3",
    "image": "https://i.scdn.co/image/ab67616d0000b27359a6022f671f929b9979011d",
    "items": [
      {
        "intro": "Author：",
        "links": [{ "text": "Atlus Sound Team", "url": "https://open.spotify.com/artist/4hFBhdNVZZuVk5FYThUwaN" },
        { "text": "Lyn", "url": "https://open.spotify.com/artist/5qEtLvXzYdv0G7c7rR6irX" }


        ]
      },
      {
        "intro": "Genre：",
        "content": "Acid jazz, Jazz rock"
      }, {
        "intro": "Leading Singles：",
        "links": [{ "text": "Last Surprise", "url": "https://open.spotify.com/track/4cPnNnTMkJ6soUOUzEtmcp" },
        { "text": "Beneath the Mask", "url": "https://open.spotify.com/track/5XLXrm5JVMdOus1fWmTOFw" }
        ]
      }, {
        "intro": "Language: ",
        "content": "English"

      },
      {
        "intro": "Best time to listen: ",
        "content": "Wandering alone on the street/ Driving with your Otaku friend"

      }
    ]
  }
];

const container = document.getElementById('container');

data.forEach(item => {
  const textbox = document.createElement('div');
  textbox.className = 'textbox';
  textbox.style.backgroundColor = item.color;

  const title = document.createElement('h2');
  title.textContent = item.title;
  textbox.appendChild(title);

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = 'image';
  textbox.appendChild(img);

  const ul = document.createElement('ul');

  item.items.forEach(listItem => {
    const li = document.createElement('li');

    const intro = document.createElement('span');
    intro.style.fontWeight = 'bold';
    intro.textContent = listItem.intro;

    li.appendChild(intro);

    if (Array.isArray(listItem.links) && listItem.links.length > 0) {
      listItem.links.forEach((linkItem, index) => {
        const link = document.createElement('a');
        link.href = linkItem.url;
        link.textContent = linkItem.text;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.style.textDecoration = 'none';
        link.style.color = '#007BFF';
        li.appendChild(link);
        if (index < listItem.links.length - 1) {
          li.appendChild(document.createTextNode(', '));
        }
      });
    } else if (listItem.content) {
      const content = document.createElement('span');
      content.textContent = listItem.content;
      li.appendChild(content);
    } else {
      const content = document.createElement('span');
      content.textContent = 'To come';
      li.appendChild(content);
    }
    ul.appendChild(li);
  });
  textbox.appendChild(ul);
  container.appendChild(textbox);
});
