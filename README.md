# Blockchain Studio Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

Once you clone this repo go into the terminal and install dependencies.

```shell
npm install
```

Now you're ready to serve the development build.

```sh
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

To run the test suite execute:

```sh
npm run test
```

This will confirm that any changes made to the original code did not break any existing functionality.



## Deployment

When pushing new code into the main branch of the repository the deployment github action will build the application and host it on a AWS S3 Bucket. You can follow the link below to check the deployment.

[Go to React Challenge Delployment](http://react-blockchain-challenge.s3-website.eu-central-1.amazonaws.com/)


## File Structure

```
  📦 src
  ┣ 📂 assets - logo
  ┣ 📂 components
  ┣ ┣ 📂 navigation - sidebar components
  ┣ ┣ 📂 page - page layout components
  ┣ ┣ 📂 tables - tables used in the application
  ┣ ┣ 📂 tests - tests for components folder
  ┣ ┣ 📜 Other components
  ┣ 📂 pages - all the application pages
  ┣ ┣ 📂 tests - tests for pages folder
  ┣ 📂 sources - request helpers
  ┣ 📂 utils - helpers and utility functions
  ┣ ┣ 📂 tests - tests for utilities
  ┗ 📜 App.js - routes declarations
  ┗ 📜 index.js - main entry point
  ```

