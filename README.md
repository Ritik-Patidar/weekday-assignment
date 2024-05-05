# Job Portal

## Requirements
- Job Cards: Each job listing should be displayed as a card containing the following information:
  - Job title
  - Company name
  - Location
  - Job description (limited to a certain number of characters with an option to expand)
  - Experience required
  - Apply button/link

- Filters: Implement filters to allow users to refine the job listings based on:
  - Min experience
  - Company name
  - Location
  - Remote/on-site
  - Tech stack
  - Role
  - Min base pay

- Infinite Scroll: Implement infinite scroll to load additional job listings as the user scrolls down the page. The platform should fetch and display more jobs automatically without requiring the user to click on a "Load More" button.

- Responsive Design: Ensure that the platform is responsive and works well on different screen sizes, including mobile devices (Optional)

## Technology Stack
- ReactJs: [Link to React](https://reactjs.org/)
- Redux: [Link to Redux](https://redux.js.org/)
- CSS: [Link to TailwindCSS](https://tailwindcss.com/)
- Material UI: [Link to Material UI](https://material-ui.com/)

## Installation
1. Clone the repository: `https://github.com/Ritik-Patidar/weekday-assignment.git`.

2. Navigate to the project directory: `cd weekday-assignment`.

3. Install dependencies: `npm install`.

4. Start the application: `npm run dev`.


## Usage
- Open the application in your web browser.
- Browse through the job listings.
- Use filters to refine the listings based on your preferences.
- Scroll down to load more job listings automatically.
- Click on Show more on job card to view more details and apply.

## Project Structure
- `src/components`: Contains React components.
- `src/redux`: Contains Redux reducers, RTK query and store.
- `src/types`: Contains type interface.
- `src/utils`: COntions utility functions.
- `public`: Contains public assets.

## Demo
- [Live Demo](https://ritik-weekday-assignment.vercel.app/)

## Screenshots
![image](https://github.com/Ritik-Patidar/weekday-assignment/assets/67598349/dbf348c9-dbe0-4a2c-b7da-34c7725e48f7)

## Future Improvements
- Implement sorting options for job listings.
- Improve mobile responsiveness.
