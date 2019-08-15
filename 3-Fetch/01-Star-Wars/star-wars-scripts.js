// var starWarsPeopleList = document.querySelector('ul');

// fetch('https://swapi.co/api/people') 
// .then(function(response) {   
//   return response.json();
//   console.log(response.json()) 
// })
// .then(function(json) {
//     let people = json.results;

//     for(p of people) {
//         let listItem = document.createElement('li'); 
//         listItem.innerHTML = '<p>' + p.name + '</p>';
//         starWarsPeopleList.appendChild(listItem); 
//     }
// });

const request = async () =>{
  const response = await fetch('https://swapi.co/api/people');
  const json = await response.json();
  console.log(response);
  console.log('this should print last');
}

request();