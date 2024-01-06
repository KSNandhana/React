import React from "react";
export const fakeAuthService = {
    login: async (username, password) => {
      // Simulating authentication with a fake delay
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'demo' && password === 'password') {
            resolve({ token: 'fakeAuthToken' });
          } else {
            reject(new Error('Invalid username or password'));
          }
        }, 1000); // Simulated delay of 1 second
      });
    },
  };
  