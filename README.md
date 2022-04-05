# PLACE2LIVE-FRONTEND

LINK TO BACKEND API: https://github.com/mraa022/PLACE2LIVE-API

An all-in-one map-based web application that allows students in the Waterloo region to easily find a PLACE2LIVE, find another student to take over their available rooms, and find future roommates. To get started, users would upload a photo of their student ID and a quick selfie to confirm their identity and ensure the safety of other users, these photos will be discarded after verification. Our system will also identify what institution the user belongs to, to be displayed on their profile. After this simple step, the rest is up to the user to explore! From the main screen, they can choose a subpage based on what their needs are, looking for a place to stay, looking for other users to sublet out to, or looking for new roommates.

PLACE2LIVE will have 3 main features, a Tenant Search portal, a Room Search portal, and a Roommate Search Portal. Automatically, posts in the Tenant Search portal, Room Search portal, and Roommate Search portal will get a “TenantNeeded”, “RoomNeeded”, “RoommateNeeded” tag, respectively. Users will also tag their own posts, for easy searchability, then those who want to search through the portals have the option to use the tags as filters.

# **Components and Features that have been Implemented:***
- Login to Account (on backend)
- Create Account (missing authentication) (on backend)
- Create Post (basic structure) (on backend)
- Edit Post (on backend)
- Delete Post (on backend)
- Placing Markers on Map When Units at Certain Address is added (on frontend)

# **Components and Features that will be Implemented in the Future:**
- Authenticating New Users with their Student ID and photos
- Tags on each type of post, manual and automatic
- User Profiles to see photos, reviews, or more information
- Search Functionality, including searching by attributes
- Notifications for Attributes the User is Interested in or New Profile Reviews
- Dealing with Fake Reviews thorugh authentication and reporting posts


_***Unfortunately, we were unable to connect the frontend and backend due to the time constraints, but the frontend and backend features are currently implemented standalone from one another.**_


# **Dependencies**
The frontend of PLACE2LIVE relies on the following dependencies:
- "@testing-library/jest-dom": "^5.16.2"
- "@testing-library/react": "^12.1.3"
- "@testing-library/user-event": "^13.5.0"
- "minimist": "^1.2.6"
- "react": "^16.13.0"
- "react-dom": "^16.13.0"
- "react-google-maps": "^9.4.5"
- "react-router-dom": "^6.2.2"
- "react-scripts": "5.0.0"
- "web-vitals": "^2.1.4"

