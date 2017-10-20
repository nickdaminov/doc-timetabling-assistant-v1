First, install webpack:

  npm i webpack -S

Then, install babel:

  npm i babel-core babel-loader babel-preset-es2015 babel-preset-react -S

Finally, install react and react-dom:

  npm i react react-dom -S

To run webpack and compile the required bundle.js file, run:

  ./node_modules/.bin/webpack -d --watch

This will compile the JSX and ES6 code into browser-compatible JS, and will recompile every time a change is made to any source file.
