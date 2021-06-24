# gamer-rating

Designed to use queries on multiple game apis to generate composite score based on rank percentiles.

API calls to anything but openDota proved to be very challenging with Angular, so for demonstration purposes using "testy" with any non-dota game will simulate a successful API call and object build.

Game objects are added to an array sitting in mock-games.ts, which is subscribed to by a service and updates the main page when changes are made to the array.

I did not follow correct Angular convention and usage in this project, I sort of jammed things together to make it work, but I'd like to get a more solid understanding in the future.