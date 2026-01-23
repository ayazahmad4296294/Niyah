# Niyah - Company Directory & Trust Platform

Niyah is a sophisticated MERN stack application designed to serve as a comprehensive directory for companies, featuring a robust trust and verification system. The platform allows users to browse verified organizations, read and submit reviews, file complaints, and verify certifications via blockchain-backed QR codes.

---

## 🛠 Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Axios, React Router.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose).
- **Authentication**: JWT-based secure login and registration.
- **Verification**: Simulated blockchain-backed certification lookup.

---

## 📂 Project Architecture

### 🖥 Backend (`/server`)

#### Root Files
- **`server.js`**: The main entry point for the backend server that initializes Express, connects to MongoDB, and configures middleware like CORS and body parsers. It also orchestrates all the API routes and starts the server on the specified port.
- **`.env`**: Stores sensitive environmental variables such as database connection strings and JWT secrets to keep them out of version control. It is critical for maintaining secure production and development environments.

#### Controllers (`/controllers`)
- **`complaint.controller.js`**: Handles the logic for submitting and managing user complaints against registered companies. It ensures all required data is validated before saving to the database.
- **`contact.controller.js`**: Manages the processing of submissions from the "Contact Us" form on the frontend. It captures user inquiries and stores them for administrative review.
- **`rating.controller.js`**: Processes star-rating submissions for companies, calculating averages and updating trust signals. It works in conjunction with the review system to provide a holistic view of company reputation.
- **`review.controller.js`**: Governs the creation, retrieval, and pagination of company reviews. It includes logic to fetch reviews by company ID and handle authenticated submissions.

#### Middleware (`/middleware`)
- **`auth.js`**: Contains the JWT verification logic used to protect sensitive routes. It extracts tokens from headers and attaches the verified user object to the request for downstream controllers.

#### Models (`/models`)
- **`Blog.js`**: Defines the Mongoose schema for blog posts, including fields like title, content, author, and category. It enables the platform to share updates and trust-related articles.
- **`Company.js`**: The core schema for organization profiles, containing fields for name, category, website, location, and verification status. It acts as the blueprint for all directory entries.
- **`CompanyApplication.js`**: Specifies the data structure for companies applying to be listed on the platform. It captures detailed business information and legal status during the onboarding process.
- **`Complaint.js`**: Orchestrates the storage of dispute data, linking specific users to their grievances against companies. It includes fields for complaint type, description, and resolution status.
- **`ContactUsForm.js`**: A lightweight schema specifically for capturing general inquiries from the site's contact page. It helps organize communication from potential partners or curious users.
- **`Rating.js`**: Tracks individual numerical scores given to companies by users. This model allows the system to aggregate trust scores while maintaining an audit trail of individual feedback.
- **`Review.js`**: Stores textual feedback and associated ratings, providing the qualitative data seen on company profile pages. It links reviews to both the author and the target company.
- **`User.js`**: Manages user profiles, including encrypted passwords (via bcrypt) and role-based access information. It is the foundation for the platform's authentication and personalization features.

#### Routes (`/routes`)
- **`application.routes.js`**: Defines the API endpoints for submitting and reviewing new company listing applications. It routes requests to the appropriate controllers for processing.
- **`auth.js`**: Provides the endpoints for user registration, login, and profile retrieval. It is the gateway for all identity-related interactions on the backend.
- **`blog.routes.js`**: Handles the RESTful routing for blog content, allowing the frontend to pull latest articles. It supports operations for fetching multiple posts or detailed single entries.
- **`companyRoutes.js`**: The primary router for company data, supporting search, filtering, and detailed retrieval. It also includes the logic for the dynamic verification response.
- **`complaint.routes.js`**: Maps complaint-related HTTP requests to their respective controller actions. It ensures that only authenticated users can submit formal grievances.
- **`contact.routes.js`**: Sets up the endpoint for the public contact form delivery. It is a simple route aimed at facilitating easy communication with the Niyah team.
- **`rating.routes.js`**: Manages the flow of rating data between the client and the database. It provides the necessary hooks for submitting simple star-based feedback.
- **`review.routes.js`**: Exposes the routes for all review operations, including company-specific fetches. It supports complex queries like pagination and filtering by multiple IDs.

---

### 🎨 Frontend (`/src`)

#### Core Files
- **`App.jsx`**: The main application component that sets up React Router and provides global context providers. it defines the navigational structure of the entire single-page application.
- **`main.jsx`**: The entry point for the React application that renders the `App` component into the DOM. It also initializes global styles and any necessary standard libraries.
- **`index.css`**: Contains the global Tailwind CSS directives and custom utility classes used across the app. it defines the base design system, including colors, typography, and spacing.

#### Components (`/components`)
- **`Trust.jsx`**: A specialized component for displaying trust badges and certification symbols throughout the site. It helps reinforce the platform's focus on transparency and reliability.
- **`auth/AuthForm.jsx`**: A versatile component that handles both login and registration UI states. It manages form validation, error handling, and communication with the authentication services.
- **`blog/BlogCard.jsx`**: A reusable card component for displaying blog post previews on the listings page. It includes the post's thumbnail, title, and a brief description to entice readers.
- **`common/Footer.jsx`**: The sitewide footer containing site links, contact information, and social media icons. it ensures consistent navigation and branding at the bottom of every page.
- **`common/Header.jsx`**: A high-impact hero header component that often includes the primary search bar. It is designed to grab user attention and provide immediate utility.
- **`common/Navbar.jsx`**: The primary navigation bar featuring links to major sections like the directory, blog, and user profile. It is fully responsive and adjusts for mobile and desktop views.
- **`common/ScrollToTop.jsx`**: A utility component that automatically resets the scroll position to the top on page transitions. This ensures a smooth and predictable user experience during navigation.
- **`company/CompanyCard.jsx`**: The standard layout for displaying company previews in the directory and search results. It highlights the company's name, category, and its current trust score.
- **`reviews/ReviewCard.jsx`**: Displays a single user review, including the author's name, their rating, and the full comment text. It is designed for high readability on company detail pages.
- **`reviews/ReviewForm.jsx`**: provides an interactive interface for users to submit their own feedback. It handles star-rating interactions and textual input with real-time validation.

#### Context (`/context`)
- **`AuthContext.jsx`**: Manages the global authentication state, tracks the current user, and provides login/logout functions. It allows any component in the tree to check the user's logged-in status.
- **`CompanyContext.jsx`**: acts as a central store for company directory data, reducing the need for redundant API calls. it handles the initial fetch of organizations and distributes them to pages.

#### Pages (`/pages`)
- **`About.jsx`**: Shares the mission and vision of the Niyah platform, explaining the importance of company transparency. It provides background context for the site's existence and its goals.
- **`AllReviews.jsx`**: A dedicated page for browsing all reviews across the platform with advanced filtering options. It allows users to see the latest feedback regardless of the company.
- **`AuthPage.jsx`**: A dedicated layout for the login and registration process, hosting the `AuthForm`. It focuses the user's attention solely on the authentication task.
- **`Blog.jsx`**: The main hub for all platform articles and trust-related news. it fetches post data from the backend and displays them in an organized, searchable grid.
- **`CertifiedCompanies.jsx`**: A filtered view of the directory that only displays organizations with the highest verification status. It highlights top-tier performers on the platform.
- **`CompanyDetail.jsx`**: A comprehensive page for an individual company, showing its full profile, reviews, and interactive forms. it is the most data-rich page in the application.
- **`CompanyVerification.jsx`**: A specialized public page used for verifying a company's status, usually accessed via QR code. it displays blockchain metadata for high-trust certification proof.
- **`Contact.jsx`**: Hosts the public "Contact Us" form and provides administrative contact details. it is the primary point of communication for users needing support or partnerships.
- **`Home.jsx`**: the landing page of the application, featuring featured companies and a clear call to action. it sets the tone for the user's journey through the Niyah platform.
- **`NewCompanyForm.jsx`**: A multi-step application form for businesses wanting to join the Niyah directory. It collects comprehensive data from general info to legal documents.
- **`PrivacyPolicy.jsx`**: Outlines how the platform handles user data and privacy according to legal standards. it is an essential document for maintaining user trust and compliance.
- **`SearchResults.jsx`**: Dynamically displays companies and reviews that match the user's search query or category filter. It uses complex logic to aggregate results from multiple sources.
- **`GetCertified/Business.jsx`**: A specialized information page explaining the certification process for standard for-profit businesses. it outlines the benefits and requirements for joining the directory.
- **`GetCertified/NonProfit.jsx`**: Tailored information for non-profit organizations seeking to verify their transparency on the platform. it highlights the specific trust signals relevant to the NGO sector.
- **`TrustAndTransparency/RateOrComplaint.jsx`**: A combined interface for users to either rate a company or file a formal complaint. it includes the searchable company selector for easy organization lookup.
- **`TrustAndTransparency/ServiceLevelAgreements.jsx`**: Explains the platform's commitment to reliability and service standards. it provides transparency regarding how Niyah operates as a service provider.
- **`TrustAndTransparency/TrustReport.jsx`**: A high-level report page summarizing platform-wide trust metrics and verification trends. it showcases the effectiveness of the Niyah directory ecosystem.

#### Services & Utils (`/services`, `/utils`)
- **`api.jsx`**: The base Axios configuration featuring the backend URL and interceptors for handling authentication headers. It serves as the foundation for all network requests.
- **`authService.jsx`**: Contains encapsulated functions for login, registration, and logout API calls. it abstracts the networking details away from the UI components.
- **`companyService.jsx`**: provides a clean API for fetching company details, search results, and category listings. it ensures consistent data handling for all organization-related queries.
- **`reviewService.jsx`**: Handles all interactions with the review endpoints, including submission and fetching logic. it simplifies the consumption of feedback data on the frontend.
- **`constants.jsx`**: Stores reusable string constants, configuration values, and architectural settings. it helps maintain consistency and prevents "magic strings" throughout the frontend.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ayazahmad4296294/Niyah.git
   ```

2. **Backend Setup**:
   ```bash
   cd Niyah/server
   npm install
   # Create a .env file with your MONGO_URI and PORT
   npm run dev
   ```

3. **Frontend Setup**:
   ```bash
   cd Niyah
   npm install
   npm run dev
   ```

---

## 📄 License
This project is for demonstration and production purposes under the Niyah development team. All rights reserved.
