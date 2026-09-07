# The Edge Assignment

The Edge is a React and Vite web application with separate student and tutor experiences. It includes role selection, account registration, email-verification screens, sign-in validation, tutor onboarding, a tutor dashboard, and student-facing landing, shop, product, article, and about pages.

## Technology Stack

- React 19 for the UI
- React Router for client-side navigation
- Vite for development and production builds
- Browser `localStorage` for the selected role, account credential hashes, names, and avatar data
- CSS files for global, shared, and page-specific styling

## Architecture

The application uses a single-page architecture. `src/main.jsx` creates the React root and renders `App.jsx`. `src/App.jsx` owns the router and maps URL paths to page components. Pages contain screen-level workflows, while reusable navigation and branding are kept in `src/Components`.

```text
src/
├── main.jsx              # React entry point
├── App.jsx               # BrowserRouter and route definitions
├── Components/           # Shared UI such as Logo, NavBar, Footer, and Sidebar
├── Pages/                # Route-level screens and user workflows
├── Styles/               # Global and page-specific CSS
├── assets/               # Images and other imported assets
├── utils/                # Shared helpers, including credential hashing
├── App.css               # Application-level styles
└── index.css             # Global base styles
```

### Application Flow

1. The home page lets the user choose `student` or `tutor`.
2. The selected role is saved in `localStorage`, and the user continues to signup.
3. Signup validates the form, hashes the email and password, and stores the hashes and names in `signupCredentials`.
4. The email and verification pages complete the registration flow and link to sign in.
5. Sign in validates the saved credential hashes.
6. After successful sign-in, students go to `/home` and tutors go to `/onboarding-1`.
7. Tutor-facing pages use the shared Sidebar. It reads the saved first and last names and links the logout control to `/signin`.

### Routes

| Path | Page | Purpose |
| --- | --- | --- |
| `/` | `HomePage` | Select a student or tutor role |
| `/signup` | `SignupPage` | Create an account |
| `/email` | `EmailVerificationPage` | Enter the verification code |
| `/verified` | `VerificationSuccessPage` | Confirm verification and continue to sign in |
| `/signin` | `SigninPage` | Validate account credentials |
| `/home` | `LandingPage` | Student landing experience |
| `/onboarding-1` | `Onboarding1` | First tutor onboarding screen |
| `/onboarding-2` | `Onboarding2` | Second tutor onboarding screen |
| `/dashboard` | `Dashboard` | Tutor dashboard |
| `/my-classes` | `Myclasses` | Tutor class management |
| `/students` | `Students` | Tutor student management |
| `/about` | `About` | About page |
| `/article` | `Article` | Article page |
| `/shop` | `Shop` | Shop listing |
| `/product` | `ProductDetail` | Product detail page |

## Client-Side Persistence

The app currently uses browser storage rather than a backend database:

- `selectedRole`: stores the selected role as a JSON string.
- `signupCredentials`: stores `firstName`, `lastName`, `emailHash`, and `passwordHash`.
- `userAvatar`: stores an optional avatar data URL for the Sidebar.

The hashing and email-normalization helpers are in `src/utils/credentials.js`. This storage approach is suitable for my assignment flow.

## Run Locally

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

The available scripts are:

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```
