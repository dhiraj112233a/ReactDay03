⭐ Introduction to APIs in React
 - An API (Application Programming Interface) acts as a bridge allowing a frontend application built in React to communicate with backend server services or databases. In web applications, REST APIs use standard HTTP protocols to perform CRUD operations (Create, Read, Update, Delete). 
 - Methods :
 GET      Read      Fetches or retrieves data from the backend server.
 POST     Create    Sends new data payload to create a new resource on the server.
 PUT      Update    Updates or replaces an existing resource completely on the server.
 DELETE   Delete    Removes a specific resource from the server.
 
 ⭐  Setting Up React Project with Vite :
 # Step 1: Create Vite Project npm create vite@latest react-api-demo -- --template react 
 # Step 2: Navigate into the project folder cd react-api-demo 
 # Step 3: Install dependencies npm install npm install axios 
 # Step 4: Run the development server npm run dev


 ⭐GET Request :
 - A inside a GET request is used to retrieve data from a server endpoint. In React, we typically fetch data useEffect hook when the component mounts and store the result in component state using useState .

 ⭐POST Request :
 - A POST request is used to send user input or data payloads to the server to create a new resource. The server processes the body payload and returns the created record (often with a generated ID).

 ⭐PUT Request :
 - A PUT request is sent to update an existing resource on the server. You pass the resource's unique ID in the endpoint URL along with the updated body payload.

 ⭐DELETE Request :
 - A DELETE request sends an instruction to remove a specific record from the backend database by providing its primary key / ID in the API URL.

 ⭐All-in-One Complete CRUD React Vite Component :
 C  - Create - POST
 R  - Read   - GET
 U  - Update - PUT
 D  - Delete - DELETE

