# Wallaclone

Final exercise of Bootcamp Web VII. It is accesible via [this URL](https://frontend-wallaclone.grusite.now.sh)

It is a React application that uses the [Wallaclone API](https://github.com/grusite/backend-wallaclone.git) developed in Node.

## Available Scripts

In the project directory, you can run (after the `npm/yarn install` command):

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm run test` (not used in this project)

Launches the test runner in the interactive watch mode.<br />

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Additional info

I explain how the application works (architecture, tech used and functions) in the [next video](urlDrive).

I haven't done all the features asked by the PO due to lack of time. There is no public and private views, the only public views are those related to authentication, the rest are private.

I have focused on the <b>authentication</b> part (in both backend and frontend):

- Login
  - Traditional
  - Google sign in
  - Facebook sign in
- Register
- Verify email
- Resend verification email
- Forgot password
- Reset password
- Logout

\*Once authenticated, all the API calls will have the <b>Authentication header</b> setted with the token "Authentication: Bearer `<token>`"

Also, all the routes are protected but the links above (it redirects you to login if not authenticated). Also, if authenticated all routes from above redirects you to home.

Once logged in, the user would be able to see all his published advertisements, search adverts by some filters, get the detail of each advert, edit an advert and even create one. Also can see their profle and also can log out.

\*The application is configured to use <b>i18</b> so all text are being traduced in the moment (using HOCs). As I only want english I did't create a language selector, but it's ready to do it.

### Next features

For next releases, I have planned to do the following fetures:

- Create a public zone
- Social Network sharing
- Delete account
- Update profile info
- Create advers by users
- Delete adverts
- Mark adverts as sold/reserved/available
- Add chat between users
- Add and delete favs and list your favorites
- Push notifications for your favs modification and for new chats

### Tests

Due to the lack of time, I have decided to avoid test so far. I will do it afterwards.

### Deployment

The deployment is done using [now.sh](https://zeit.co/) in the [https://frontend-wallaclone.grusite.now.sh](https://frontend-wallaclone.grusite.now.sh)

To deploy just make changes in the code, commit and push to gitlab, and execute `now` (before `npm i -g now`). It will automatically deploy the code into the same URL.

## Author

- **Jorge Martín**
