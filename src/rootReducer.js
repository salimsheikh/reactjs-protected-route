import { createReducer } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

/*
export const rootReducer = createReducer(
    initialState,
    {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    }
);
*/

const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('login', (state) => {
            state.isAuthenticated = true;
        })
        .addCase('logout', (state) => {
            state.isAuthenticated = false;
        });
});

export default rootReducer;