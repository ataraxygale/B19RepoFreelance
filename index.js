/* SUMMARY
A visitor enters the website and finds a list of available freelancers.

Each freelancer has a name, an occupation, and a starting price for their services.
They observe on the list Alice, the writer with a starting price of $30,
and Bob, who is a teacher, has a starting price of $50.

The visitor also
finds a message
    that displays the average starting price of all the freelancers.
In this example, the average starting price is $40.

A few seconds later, a new listing appears for a freelancer named Carol,
who is a programmer and has a starting price of $70.

The average starting price is updated to $50.

New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.
*/

//----------------------------------------------------------------------------------------------------------


// The program initializes an array of possible names and an array of possible occupations.
// The program initializes an array of at least two freelancers with names, occupations, and starting prices.
  // document.querySelector is correctly used to select existing DOM elements

const freelancers = document.querySelector("#freelancers"); [
    { name: "Alice", startingPrice: 30, occupation: "writer" },
    { name: "Bob", startingPrice: 50, occupation: "teacher" },
    { name: "Carol", startingPrice: 70, occupation: "programmer" }, // have 3rd row appear after time interval
  ];

  // The initial array of freelancers is rendered onto the page.

  function render() {
    // made matching freelancers ID on HTML
    const freelancersContainer = document.querySelector("#freelancers");
    //go through everything in array here in render function like shapes.forEach((shape)
    freelancers.forEach((freelancer) => {
        const artist = document.createElement("li");
        artist.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.startingPrice}`;
        freelancersContainer.appendChild(artist);
    });
}

// this needs to be called after
render();


// A function is written that correctly calculates the average starting price of the freelancers array.

function calcAverage() {
    const averageStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0) / freelancers.length;
    console.log(`The average starting price is $${averageStartingPrice.toFixed(2)}`);
}

// call this like render
calcAverage();



// line that displays a message on the webpage/console with average starting price of all freelancers
// this will be $40


// time interval happens after about 5 seconds from that shows
// have 3rd row with Carol appear
// The average starting price is updated to $50


// The DOM is updated to reflect the average starting price

// A function is written that generates a freelancer with a random name, occupation, and starting price. This object is pushed into the freelancers array.

// An interval is set to add a freelancer and rerender every few seconds.

setInterval(() => {
    // A function is written that generates a freelancer with a random name, occupation, and starting price.
    function newFreelancer() {
        const newArtist = {
            name: "New Freelancer",
            occupation: "New Occupation",
            startingPrice: Math.floor(Math.random() * 100) + 1,
        };
        freelancers.push(newArtist);
        render(); // Re-render the freelancers
        calcAverage(); // Update the average starting price
    }

    newFreelancer();
}, 5000); // Add a new freelancer every 5 seconds


