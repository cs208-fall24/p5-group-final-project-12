# Retrospective

- name: Andy Lopez-Martinez
- email: andylopezmartine@u.boisestate.edu

## Experience

In this project, I learned a lot about working with Java’s GUI components and integrating them with backend functionality. The most significant challenge I faced occurred when my teammate started working on his part of the project. We were sharing the backend code, and I didn’t initially consider the importance of isolating our separate functionalities. As a result, my teammate’s code for the "view all comments" feature started redirecting to my index page, and his comments were mixed with mine. The issue arose because we had not yet clearly defined our individual responsibilities within the project, which led to overlap in our work.

Once I realized the issue, I quickly understood that I had been generalizing the code too much. The backend needed to be more specific, and we had to hard-code certain sections to make sure that our actions didn’t have conflicts with each other. This was extremely important for features like the comments section, where we needed to ensure that each team members comments were handled separately. Once I shared my code, my team member communicated the issues he was having and with thorough investigation as to what went wrong, I managed to find the errors, and was able to adjust the backend code, particularly the Pug template and Server.js, to ensure that his routes and data were distinct from mine.

The turning point came when we started communicating more effectively. We knew that there would be issues when the time came that we started to merge our code, but were ready to tackle them together. By addressing the problem almost immediately and making sure that we were on the same page, we were able to resolve the issues quickly and get the project back on track. This experience reinforced the importance of good communication in collaborative projects. It also reminded me of the need to plan clearly from the start to avoid conflicts later.

This project has taught me the important lesson of managing shared resources in a team setting. While we were able to fix the issues that were presented to us as the project went along, it was a reminder that clear communication is crucial to preventing problems in collaborative coding environments. I also learned how to better manage the separation of different features and handle conflicts between different parts of the code when working with teammates.

## Known issues or Bugs

NONE

## Sources used

Java Oracle Platform for Play Music
CHATGPT for non-copyright images
Fell back on Zybooks for refreshers
SQLite Documentation 
Express.js Documentation 
Google Search for getting font-family
