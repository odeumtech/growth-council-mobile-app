import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

import authReducer from '../screens/auth/authSlice';
import profileReducer from '../screens/account/profileSlice';
import passwordReducer from '../screens/setting/passwordSlice';

import upcomingEventReducer from '../screens/dashboard/upcomingEventSlice';
import PointOfEngagementReducer from '../screens/dashboard/slice/PointOfEngagementSlice';
import CommunityMemberReducer from '../screens/dashboard/slice/CommunityMemberSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
};

const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    password: passwordReducer,
    upcomingEvents: upcomingEventReducer,
	PointOfEngagement: PointOfEngagementReducer,
	CommunityMember:CommunityMemberReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        let middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });

        if (__DEV__ && !process.env.JEST_WORKER_ID) {
            const createDebugger = require('redux-flipper').default;
            middlewares.push(createDebugger());
        }

        return middlewares;
    },
});

const persistor = persistStore(store);

export {store, persistor};
