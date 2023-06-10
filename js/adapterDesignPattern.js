//
const people = {
    weightInKilograms: 58,
};

const planets = [
    {
        planetName: 'Mercury',
        relativeGravity: 0.38
    },{
        planetName: 'Venus',
        relativeGravity: 0.91
    },{
        planetName: 'Mart',
        relativeGravity: 0.38
    },{
        planetName: 'Jupiter',
        relativeGravity: 2.34
    },{
        planetName: 'Saturn',
        relativeGravity: 0.93
    },{
        planetName: 'Uranus',
        relativeGravity: 0.92
    },{
        planetName: 'Neptune',
        relativeGravity: 1.12
    },{
        planetName: 'Pluton',
        relativeGravity: 0.07
    },
];

//
function calculateWeightInOthersPlanets(peopleAdapterToPounds) {
    planets.forEach((planet) => {
        console.log(peopleAdapterToPounds.weightInPounds);
        console.log(`You would weight ${(planet.relativeGravity * peopleAdapterToPounds.weightInPounds)} pounds on ${planet.planetName}`);
    });
};

// Adapter
const peopleAdapterToPounds = {
    weightInPounds: function() {
        return people.weightInKilograms;
    },
};

// using the adapter to call the function with the original object:
calculateWeightInOthersPlanets(peopleAdapterToPounds);