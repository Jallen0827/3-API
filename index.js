const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(event){
    event.preventDefault();
    fetch(baseURL)
        .then(result =>{
            // console.log(result);
            return result.json();
        })
        .then(json =>{
            // console.log(json);
            displayRockets(json);
        })
}

function displayRockets(data){
    let rockets = data.forEach(element => {
        // console.log(element.name);
        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');

        // rocket.innerText = element.
        rocketName.innerText = element.name;
        rocketCost.innerText = element.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    });
    // console.log(data[0].id);
}