# Simple slot machine made in ReactJS

## How to Run
`npm install` first, after all installed you can run `npm start`

## Run the tests
You can run `npm run tests` on the root.

## Components
  - app - Holds all the components;  
  - wheel - Each image and his own container is a wheel component;  
  - winner - Shows the winner based on the result;  
  - control-buttons - Only the buttons that controls everything.  
  

## How it works
Starting pushing the Start button, each Wheel component will receive the command to start.
When all of them stops, a new command is sent to Winner component with the result (an Array of Integers).  
I'm using [RxJS](http://reactivex.io/) to handle with the timer and velocity of each wheel (`Now inside of each one`), after each "tick", I call a callback to change the src of my image based on the its state for a new random image (`Image randomizer`).  

## Thanks
