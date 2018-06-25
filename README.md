# Simple slot machine made in ReactJS

## How to Run
`npm install` first, after all installed you can run `npm start`

## Run the tests
You can run `npm run tests` on the root.

## Components
  
  ![Diagram](./diag.png?raw=true "Diagram")

## How it works
The event to start all the process begins with the control buttons setting the state of the App for True.   
My "wheel component" will listen this and start the tick to change the images on the screen based on its props previously configured.  
I'm using [RxJS](http://reactivex.io/) to handle with the timer and velocity of each wheel (`WheelFunctions`), after each "tick", I call a callback to change the src of my image based on the its state for a new random image (`Image randomizer`).  
To stop, I just set the state of the App to false, and it will trigger an event on my wheel to unsubscribe of the observable.

## Thanks
