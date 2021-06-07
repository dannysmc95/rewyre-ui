```plaintext

Page Design:

|--------------------|------------------------------------------------------------|
|        LOGO        |                          HEADER                            |
|--------------------|------------------------------------------------------------|
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|      SIDEBAR       |                          CONTENT                           |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|                    |                                                            |
|--------------------|------------------------------------------------------------|

```

```typescript

// Page Data Structure:
const pageData = {
	scripts: [],		// Array of all scripts.
	styles: [],			// Array of all styles.
	meta: [],			// Array of all meta.
	content: '',		// The main output of the compiled content of the page.
};

```