
# [Tech Support](https://techsupport-uzb8.onrender.com/) – Under Development

A simple and intuitive Tech Support platform. :tada:

Website link: [https://techsupport-uzb8.onrender.com/](https://techsupport-uzb8.onrender.com/)

## Website Features
- **Registration and Login:** Users can register and log in to access the platform.
- **Profile Picture Update:** Both users and admins can change their profile pictures for a more personalized experience.
- **Create Support Ticket:** Users can open a "support ticket" to request help from admins.
- **Admin Ticket Management:** Admins can view the tickets assigned to them, respond to them, and mark them as resolved.

## Technologies Used for the Frontend
- React, Tailwind, Axios, Material UI, Firebase, Cloudinary, JavaScript, HTML, CSS, Vitest

## Documentation by Page:
### Home
A simple homepage. The "/" route leads here. Tailwind is heavily used on this page, including an animated `<h1>`. We aimed to create a professional introduction to attract as many users as possible to our services.

![Home Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/home.png)

### Profile
If the user is not logged in, they are redirected to the login page. The content depends on whether the user is an admin or a regular user. However, the left white section is the same for both—an interface for editing personal details and profile pictures. 

If logged in as a user, the right white section displays your support tickets—whether they are open or already answered. If a ticket hasn’t been answered yet, we notify the user with a MUI `<Alert>`.

If logged in as an admin, the right section shows a large button that redirects to the admin dashboard.

![Profile Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/profile.png)  
![Admin Profile Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/adminprofile.png)

### Admin
Admins manage incoming tickets on this page. The "/admin" route leads here. If you're not logged in as an admin, you’re automatically redirected to the homepage. 

The left side of the page lists open tickets awaiting responses. The right side lists already answered tickets. This page showcases heavy usage of Material UI components.

![Admin Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/admin1.png)
![Admin Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/admin2.png)

### OpenTicket
In the menu, this page’s button is replaced by an "Admin" button if you're logged in as an admin. The route "/openticket" takes you here. The page has two input fields and a button—one for the title and one for the message. The button submits the form. If the user isn’t logged in, a message is displayed instead.

![OpenTicket Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/openticket1.png)
![OpenTicket Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/openticket2.png)

### Login
If you're already logged in, you're redirected. If not, this is the "/login" page. Normally, logged-in users cannot access this page unless they manually enter the URL, in which case they are redirected. 

The left side includes login, forgot password, and Google login options. On the right, there is a registration form requiring a username, email, and password.

![Login Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/login.png)

### About
The "/about" page provides a brief description of the functionality of each page and information about the two developers.

![About Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/about.png)

### ResetPassword
In case someone forgets their password, they can generate a new one here. Route: "/forgotpassword"

![About Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/forgotpassword.png)

### NotFound
A simple page displayed when an incorrect URL is entered.
![About Page Screenshot](https://github.com/balhun/techsupport/blob/master/images/notfound.png)

### Development ideas
- AI Assistant
- Image upload to help
- Extending help and not just about technology
-Better security
