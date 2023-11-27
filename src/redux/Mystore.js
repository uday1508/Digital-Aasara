const {configureStore} = require('@reduxjs/toolkit');
import UserOnboardingReducer from './Slices/UserOnboardingSlice';
const Mystore = configureStore({
  reducer: {
    userOnboarding: UserOnboardingReducer,
  },
});

export default Mystore;