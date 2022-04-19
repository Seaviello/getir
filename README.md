## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

1. `yarn app` for running app
2. `yarn server` for running server

## General documentation and remarks

### Introduction

Because the assignment was bigger than I would expect for job interview I did different approach than recommended. 
Instead of trying to implement everything in unlimited time, I limited my time to ~8h and tried to implement as much as possible. 

First I'll review the list of requirements to indicate what was done and to which extent.
1. ✅ React - fully written in React.
2. ✅ TypeScript - fully written in TS.
3. ✅ Redux - added and used.
4. ✅ Redux Saga - although I didn't showcase much of my skills there, usage was quite basic.
5. ❌ Project is not deployed anywhere. Even though that is my part of responsibilities at current company I follow quite specific setup. 
Figuring out how to quickly deploy both static application together with server for serving data would be good exercise for me, however not with those time constrains.
6. ✅ Figma - Although I would say that was a bold assumption that candidate should have access to figma.
7. ✅ JSON-server
8. ✅ Images
9. ✅ Pagination
10. ✅ Sorting, ❌ Brands filter, ❌ Tag filter, and ❌ itemType - most of those were prepared from API/redux perspective, however we're not fully implemented. 
Filter itself could be easily assignment on its own especially considering creating all components including virtualized list.
11. ✅ Basket
12. ✅ The same as 11, so done
13. ❌ Throttling requests - probably the easiest part to enhance. Interesting to adjust part in saga to include that.

Additional remarks atop of the above list
1. General setup is quite basic using create-react-app. The most important parts like eslint, prettier and TS config are in place.
There is for sure missing some additional tool setup, like for example storybook.
2. Styles were taken with proximity, which also means that there is no responsive design implemented. 
Tweaking styles in normal life would be done in collaboration with designer as static mock-up cannot be used for "pixel-perfect" design.
As an example: how pagination should look like with smaller number of pages or even on the first page?
3. Almost all components that would be normally part of design system were created on basic level or not implemented at all (radio group, filter).
As I think that is important part of skillset to have, functional requirements had higher priority.
4. Big part that also suffered from lack of time is testing. Standard approach (used also at the current company) from my side would be:
   1. Redux part is easy to test. For redux saga I would use redux-saga-test-plan.
   2. For component testing I would use react-testing-library.
