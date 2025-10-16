# Helping Partner App Development TODO

## Project Setup (Completed)
- [x] Initialize Expo React Native project
- [x] Install core dependencies (navigation, storage, image picker, location)
- [x] Basic App.js with navigation skeleton

## 1. Project Structure
- [x] Create directories: screens/, components/, utils/, mocks/, context/

## 2. Mock Data
- [x] Create utils/mocks.js: Sample users (customers/workers), requests, bids, reviews

## 3. Authentication
- [x] Create context/AuthContext.js: Manage user state, role (customer/worker), login/logout
- [x] Create screens/HomeScreen.js: Welcome, buttons to Login/Register
- [x] Create screens/LoginScreen.js: Email/password form, role selection, navigate to dashboard
- [x] Create screens/RegisterScreen.js: Signup form with role, store user locally
- [x] Update App.js: Wrap with AuthProvider, conditional routing (auth vs. home)

## 4. Customer Features
- [x] Create screens/UserDashboardScreen.js: List posted requests, button to post new
- [x] Create screens/PostRequestScreen.js: Form (description, category, price, location via Expo Location), save to mock/local
- [ ] Create screens/ViewRequestsScreen.js: View active requests with bids, accept bid
- [ ] Create screens/ReviewsScreen.js: After job, submit review (stars, comment), update worker rank

## 5. Worker Features
- [x] Create screens/WorkerDashboardScreen.js: List available requests, bid/accept buttons
- [x] Create screens/BidScreen.js: Enter bid price, submit to request
- [ ] Create screens/JobCompletionScreen.js: Upload photos (Expo ImagePicker), mark complete, notify customer

## 6. Shared Features
- [x] Create screens/ProfileScreen.js: View profile, reviews list, calculated rank (avg reviews)
- [x] Implement rank calculation in utils (average stars)

## 7. Integrations
- [ ] Install Firebase: expo install firebase (for auth, Firestore, Storage)
- [ ] Setup Firebase config (need user API keys)
- [ ] Replace mocks with Firebase: Auth, real-time requests/bids, photo upload to Storage
- [ ] Add permissions for location/image in app.json

## 8. Testing & Build
- [ ] Test navigation and basic flows: expo start --web / android
- [ ] Verify features: Post request, bid, photo upload, review, rank update
- [ ] Build APK: expo build:android (or EAS for iOS)
- [ ] Full testing on devices via Expo Go

## Notes
- Start with mock data for prototype.
- Ranks: Simple average of review stars (e.g., 4.5/5).
- UI: Use basic React Native components; add styles as needed.
- Backend: Firebase for scalability; real-time subscriptions for bids.
