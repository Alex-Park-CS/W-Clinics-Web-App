# Project Title

## 1. Project Description

Our team DTC02 developped an app for finding a walk-clinic to help walk-clinic users to combat the wait times and confusion of business hours by providing information on correct business hours/estimated wait time. 


## 2. Names of Contributors
List team members and/or short bio's here... 
* Hi my name is Alex and I'm excited to create a web app from the beginning!
* Hi I'm Richard, I like hiking and reading!
* Hello, My name is Inez! I do love coding and I am excited to learn how to use Git and Github.

## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service)
* Mapbox API
* Images CLI1, CLI2, CLI3 as pictures of the clinic profile page
* Google API for fonts https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap
* Google API for icons "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"

## 4. Complete setup/installion/usage
To run the W-Clinics web app locally, follow these steps:
1. Clone the repository.
2. Open the desired HTML file in a web browser.
3. When users land on the landing page, they are greeted with a login button. Press the login button.
4. Type in your email and name, and press Enter.
5. After logging in, you will see a hero asking you to update "my profile". Update your profile.
6. Done! Enjoy your time with the app!

## 5. Known Bugs and Limitations
Here are some known bugs/limitations:
* Does not connections with actual clinics, so will not be able to apply in in the real world
* The map feature does not have a navigation feature, so user must copy paste the address into another navigation app
* Visual design of the app is not as appealing as some other apps

## 6. Features for Future
What we'd like to build in the future:
* Navigation feature in app
* real-time chat service with appointment clinics directly
* for chronic patients, have schedule an appointment at the same time/day over a period of time
	
## 7. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── README.md
└──  .gitignore              # Git ignore file    
    ├── aboutus.html                # Brief explaination of the team with pitch video     
    ├── add_review.html             # A HTML form for adding review     
    ├── appointment.html            # A HTML form for adding appointmnet
    ├── clinic_list.html            # Populate vailalbe clinics
    ├── favourite.html              # Populate users' favourite clinics
    ├── history.html                # Populate users' appointment history
    ├── login.html                  # Log-in page using firebase 
    ├── main.html                   # Landing HTML file, this is what users see when you come to url
    ├── profile.html                # Necessary profile form to navigate our web app
    ├── support.html                # Support form from users to developpers
    ├── template.html               # A basc HTML skeleton for our wep page
    ├── thanks_appointment.html     # Present a confirmation of appointment when user submit an appointment form
    ├── thanks_medical_history.html # Present a confirmation of medical history update           
    ├── thanks_review.html          # Present a confirmation of writing a new review
    └── thanks_support.html         # Present a confirmation of appointment when user submit an appointment form

It has the following subfolders and files:
├── token_number.txt         # Folder for firebase token
├── .git                     # Folder for git repo
├── styles                   # Folder for styles
    └──style.css               
├── .firebase                # Folder for firebase diploy
    └── hosting.cache             
├── .vscode                  # Folder for vscode
    └── settings.json          
├── images                   # Folder for images
    ├── /CLI1.jpg                   # Clinic image 1
    ├── /CLI2.jpg                   # Clinic image 2
    └── /CLI3.jpg                   # Clinic image 3
├── text                     # Folder for footer and nav bar
    ├── footer_index_login.html     # A footer structure       
    ├── footer.html                 # A footer
    ├── nav_after_login.html        # A navbar before login
    └── nav_before_login.jpg        # A navbar after login
├── scripts                  # Folder for scripts
    ├──/add_review.js               # add_review.html
    ├──/appmnt-info.js              # Connect appointment.html and thanks_appointment.html 
    ├──/authentication.js           # Connect with firebase authentication 
    ├──/clinic_list.js              # Conect with clinic_list.html and appointment.html 
    ├──/clinic_profile_page.js      # Populate individual clinic information from clinic_list.html
    ├──/confirm_appointment.js      # thanks_appointment.html 
    ├──/favourite.js                # Populate favourite information from firebase 
    ├──/firebaseAPI_DTC02.js        # Basic irebase information
    ├──/history.js                  # Populate appointment history information
    ├──/main.js                     # Clinic information
    ├──/map.js 
    ├──/profile.js 
    ├──/script.js 
    ├──/skeleton.js 
    ├──/support.js 

```


