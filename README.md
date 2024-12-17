# Blog-Webiste

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Future Developments](#future-developments)
* [Contact](#contact)
* [Contributions](#contributions)
* [License](#license)
* [Demo](#demo)

## Introduction

This is a Blog Website using Model, View, Controller organization in order to allow users to public programming blog posts including thoughts, opinions, and articles.

## Features

* Includes a homepage with the option to sign up or login as well as published blog posts.
* Includes a homepage when the user logs in with published blog posts with user information as well a navigation with links to a dashboard, logout, and home.
* Includes authorization to check if a user has loggged in or signed up before allowing blog posts to be published.
* Saves user credentials when signed in to later allow for users to login.
* Allows for users to add comments to blog posts if they are logged in.
* Ensures homepage and dashboard are updated to present the latest blog posts.
* Includes the ability to update or delete blog posts.
* Includes further authentication if user is idle on site for a set amount of time.

## Installation

This project can be accessed via the live demo link or locally by following these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running npm install.
3. Seed database using the command npm run seed.
4. Start the application by running npm run start in your terminal.

## Technologies Used

* Model, View, Controller Organization
* Handlebars Library
* Bootstrap Icons
* Bulma Framework
* Express Framework
* SQL
* Dotenv
* Bcrypt

## Usage

Navigate to the homepage -

* Indentify the navigation bar with links to the homepage, login form, and the sign up form.
* When navigating the login or sign up form, users are able to enter credentials to be redirected to the hompeage again with greater functionality.
* After the user has logged in or signed up, users should identify the new navigation links to the homepage, logout link, and the dashboard page.
* After the user has been authenticated, they are able to view blog posts with its title and publish date rather than merely the blog post.
* When a post has been clicked on, users are able to add identify the author of that blog post as well as the ability to add a comment to this post.
* When users navigate to their dashboard, they are able to view published blog posts and its comments as well as the ability add a new blog post.
* Users are also able to update and delete their blog post.
* When the user is idle on the website for a given time, they are forced to re-authenticate themselves.

## Screenshots

### Pre-Authenticated Homepage

[Screenshot 1](./public/images/blog1.png)

### Sign Up Form

[Screenshot](./public/images/blog2.png)

### Authenticated Homepage

[Screenshot 3](./public/images/blog3.png)

### Dashboard

[Screenshot](./public/images/blog4.png)

### Individual Blog Post and Comments

[Screenshot](./public/images/blog5.png)

## Future Developments
* Add the ability to update or delete users own comments.
* Add the ability to save posts to draft for further updates before publishing.
* Add further CSS styling to ensure accessibility and enhanced user experience.

## Contact

If there are any questions or feedback, feel free to reach out via: 

* Github Issues: [Github](http://Github.com/Taylor-Brandon)

* Email: [Email](mailto://taylorbrandon.dev@gmail.com)

## Contributions

Special thanks to Columbia Bootcamps for providing the educational resources necessary to complete this project.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)