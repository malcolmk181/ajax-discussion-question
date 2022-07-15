const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    let data = fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( updatePage )
  });
});

function updatePage(data) {
  const user = data.results[0];
  document.querySelector("#profile_picture").src = user.picture.medium;
  document.querySelector("#fullname").innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
  document.querySelector("#email").innerText = user.email;
  document.querySelector("#street").innerText = `${user.location.street.number} ${user.location.street.name}`;
  document.querySelector("#city").innerText = user.location.city;
  document.querySelector("#state").innerText = user.location.state;
  document.querySelector("#postcode").innerText = user.location.postcode;
  document.querySelector("#city").innerText = user.location.city;
  document.querySelector("#phone").innerText = user.phone;
  document.querySelector("#cell").innerText = user.cell;
  document.querySelector("#date_of_birth").innerText = user.dob.date;
} 

/*

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Caroline",
        "last": "Murray"
      },
      "location": {
        "street": {
          "number": 7008,
          "name": "Park Avenue"
        },
        "city": "Kells",
        "state": "Tipperary",
        "country": "Ireland",
        "postcode": 82483,
        "coordinates": {
          "latitude": "1.5085",
          "longitude": "101.3975"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "caroline.murray@example.com",
      "login": {
        "uuid": "3ad6b97d-c2f5-487f-8e27-7fe575139f77",
        "username": "heavyladybug972",
        "password": "best",
        "salt": "l9uGD0a5",
        "md5": "f7044ed48523ed0f12a950295640c790",
        "sha1": "82e9d7c53c5b7e63b8281a557c4957cc63083ad6",
        "sha256": "3a344121d3b89ab77eab2ffd44f2454c548006170b21f147e64b62af21ff3bf6"
      },
      "dob": {
        "date": "1995-11-30T11:28:03.977Z",
        "age": 26
      },
      "registered": {
        "date": "2009-06-11T03:52:50.213Z",
        "age": 13
      },
      "phone": "031-026-9442",
      "cell": "081-495-3807",
      "id": {
        "name": "PPS",
        "value": "4784001T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/47.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
      },
      "nat": "IE"
    }
  ],
  "info": {
    "seed": "bd5b0ec07acb95d5",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
*/