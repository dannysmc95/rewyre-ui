<p align="center">
	<a href="#">
		<img width="300" src="https://github.com/dannysmc95/rewyre-ui/blob/master/rewyre-ui-logo.svg">
	</a>
</p>

<p align="center">
	Rewyre UI is a beautiful admin system plugin for the Rewyre framework.
</p>

<p align="center">
	<img src="https://img.shields.io/npm/v/rewyre-ui?color=blue">
	<img src="https://img.shields.io/npm/l/rewyre-ui">
	<img src="https://img.shields.io/npm/dw/rewyre-ui">
</p>

Rewyre UI is a plugin for the [Rewyre](https://www.npmjs.com/package/rewyre) framework that extends the base functionality with rendering abilities and a fully featured admin system, offering plugins that use it to extend it and add their own functionality.

<br />


## Installation

You can install from NPM with:

```plaintext
npm install --save rewyre-ui
```


<br />


## Getting Started

Below is a simple example showing a database connection and a simple find, for a more in-depth example, have a look at the `test` folder in the source, which has a simple to-do demo.

**Note**: _The expectation is that this framework is to be used with TypeScript specifically and that you would you use your own tooling for building and compiling it, of course, you can use JavaScript and babel instead, but it is suggested to use TypeScript, for help with setting up, look at the tsconfig.json file inside of the test folder._

```typescript
// Import the parts we need.
import { Framework, Drivers } from 'rewyre';
import RewyreUI from 'rewyre-ui';


// Create an isolated async function.
(async() => {

	// Create an instance of the framework.
	const application: Framework = new Framework({
		port: 3005,
		database: true,
		databases: [
			{
				unique: 'primary',
				host: 'localhost',
				port: '27017',
				name: 'example-app',
				driver: Drivers.MONGO,
				default: true,
			},
		],
	});

	// Load the plugins.
	application.use(RewyreUI);

	// Start the server.
	await application.start();
})();
```

Then head over to: [http://localhost:3005/admin](http://localhost:3005/admin).
