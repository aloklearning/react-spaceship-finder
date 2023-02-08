# React Spaceship Finder 🚀

[![made-with-react](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://reactjs.org/)
[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![build](https://img.shields.io/appveyor/build/gruntjs/grunt)](https://pub.dev/packages/flutter_bounce#-analysis-tab-)

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to find the best spaceship from the various options in a web application.
- This project is **fully responsive** and has taken UI motivations from [PolyAI](https://poly.ai/) to give a feeling of belongingness to the PolyAI ecosystem.
- The UI/UX implementations and strategiies are purely developer's ([Alok Kumar](https://github.com/aloklearning)) work and there is no way it has been copy-pasted from other website.

## Pre-Requisites

Make sure you have the following installed in your system before you proceed to run this project:
- [ ] Node > 14.x.x
- [ ] npm > 5.x.x
- [ ] Latest version of `React Installed`

## Verification

In case you would like to verify the above, please follow the below commands in your terminal. In case it is there, great! Else, you can install it by clicking on the following links in [here]():

**Important:** It is recommended you update your `npm` and `node`, for making use of lates features possible.

1. **Node**

```bash
node -v
```

2. **NPM**

```bash
npm -v
```

3. **React**

```bash
npm view react version
```

## Features

The project has been created to give the users the best experience possible. Here are some of the highlighting features the web provides:

- Fully responsive
- Nice UI and User experience.
- The app provides filtering of spaceships based on the fields like **Colors**, **Maximum Speed**, **Pulse Laser** and **Date of Manufacture**.
-  Comes with various validations like checking the range of **Maximum Speed**, and **Date of Manufacture**.
- The app is capable of filtering with the combination of sophisticated variations for few filters like:
    - **Colors:** All, Any of the selected colors, none of the selected colors.
    - **Maxium Speed:** Less than, More than, Exactly
    - **Pulse Laser:** Has or Has Not
    - **Date of Manufacture:** After, Before, On the exact date
- **Show All Spaceships** feature is present.
- View details of a specific spaceship easily by clicking on the card.
- A **Query String** is generated and show with the filter resuilts. It keeps on updating as the filter changes.
- The page comes with a **default filtered data** on the page load along with the same filters applied in the filter section.
- A dedicated and interactive space for filtering which helps you do the filtering with ease and without hassle.

## Running the Project

- Go to the project directory, you can run:

```bash
npm install && npm run
```

- It will first install the **depenedencies** of the project and then runs the app in the **development** mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Submission Checklists

✅ Filtering based on **Colors**, **Maximum Speed**, **Pulse Laser** and **Date of Manufacture**.
✅ Variations with the above filters:
    ✅ **Colors:** All, Any of the selected colors, none of the selected colors.
    ✅ **Maximum Speed:**
        ✅ Less than, More than, Exactly
        ✅ Maxium speed range check **(50-200)**
    ✅ **Pulse Laser:** Has or Has Not
    ✅ **Date of Manufacture:** 
        ✅ After, Before, On the exact date
        ✅ Date range check **(1980-2020)**
✅ Spaceship information being shown and real-time changes based upon the filter data
✅ Query string being generated and shown on the page. 
✅ Updating the filter updates the query string.

### Bonus Checklist

✅ Parsing the query string on page load, or even returning some filtered data.
