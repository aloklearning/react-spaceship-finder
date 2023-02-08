# React Spaceship Finder 🚀

[![made-with-react](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://reactjs.org/)
[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![build](https://img.shields.io/appveyor/build/gruntjs/grunt)](https://pub.dev/packages/flutter_bounce#-analysis-tab-)

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to find the best spaceship from the various options in a web application.
- This project is **fully responsive** and has taken UI motivations from [PolyAI](https://poly.ai/) to give a feeling of belongingness to the PolyAI ecosystem.
- The UI/UX implementations and strategiies are purely developer's ([Alok Kumar](https://github.com/aloklearning)) work and there is no way it has been copy-pasted from other website.
- A very well illustrations has been provided [here](https://github.com/aloklearning/react-spaceship-finder/blob/main/src/assets/github_resources/MrLittleZSearchingApp_Alok_Kumar_2023-02-08.pdf). Please do see that to know more about how the **app works**, and how it **looks like**.

## Pre-Requisites

Make sure you have the following installed in your system before you proceed to run this project:
- [ ] Node > 14.x.x
- [ ] npm > 5.x.x
- [ ] Latest version of `React Installed`

## Verification

In case you would like to verify the above, please follow the below commands in your terminal. In case it is there, great! Else, you can install it by clicking on the following links in [here](https://github.com/aloklearning/react-spaceship-finder#links):

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
- Persistant filter, which doesn't change the value even when the data or result changes. 
- A **Query String** is generated and show with the filter resuilts. It keeps on updating as the filter changes.
    - The **query string** comes with the **URL Encoding**. It can directly be used to push it to the url to maintain the filter.
- The page comes with a **default filtered data** on the page load along with the same filters applied in the filter section.
- A dedicated and interactive space for filtering which helps you do the filtering with ease and without hassle.

## Running the Project

- Go to the project directory, you can run:

```bash
npm install && npm run
```

- It will first install the **depenedencies** of the project and then runs the app in the **development** mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Instructions

- A very well versed illustrations has been provided to best help out the users to understand how the app looks and works like. Please click [here](https://github.com/aloklearning/react-spaceship-finder/blob/main/src/assets/github_resources/MrLittleZSearchingApp_Alok_Kumar_2023-02-08.pdf).

## Submission Checklists

- [x] Project has to be kept private in a Github repository.
- [x] Filtering based on **Colors**, **Maximum Speed**, **Pulse Laser** and **Date of Manufacture**.
- [x] Variations with the above filters:
    - [x] **Colors:** All, Any of the selected colors, none of the selected colors.
    - [x] **Maximum Speed:**
        - [x] Less than, More than, Exactly
        - [x] Maxium speed range check **(50-200)**
    - [x] **Pulse Laser:** Has or Has Not
    - [x] **Date of Manufacture:** 
        - [x] After, Before, On the exact date
        - [x] Date range check **(1980-2020)**
- [x] Spaceship information being shown and real-time changes based upon the filter data
- [x] Query string being generated and shown on the page. 
- [x] Updating the filter updates the query string.
- [x] Query string is API and page url sharing friendly. 
- [x] **No 3rd party libraries/packages** has been **used** like **date picker**. All the components has been made from scratch. The only 3rd party library has been used, which is [React Router DOM](https://www.npmjs.com/package/react-router-dom) being used for navigation.

### Bonus Checklist

- [x] Parsing the query string on page load, or even returning some filtered data.

## Assumptions

- The option **Maxium Speed** can come with a speed provider and a **single** selectable option, as it does say **able to choose**, unlike colors option, which says **choose multiple color options**.
- The option **Manufactuing Date** can come with a date and a **single** selectable option. Reason being the same as above.
- The generated query string can be shown on the home page, as there was a difficulty in understanding to show the real time changes with the work. `console.log()` was not a good idea. 
- **Show all spaceships** can be included, as in the filter app, it is usually an option which can add better UX.
- API filtering implementation doesn't have to be written or shown in the code. A comment in the `useEffect()` can help the developers/assessors understand that where exactly it will be implemented.
- All filter selection based filtering, and not all. It helped me save some time. 
- Test cases are not mandatory to be written in the assignment. 
- Color can be selected as minimum as possible. It saved time in getting the filter to work quickly. Chosen only `red`, `green` and `blue`.
- The project doesn't require hosting, as the requirement says, **upload your solution to a GitHub repo, and share the link with us**.

## Improvements

A project can always be improved. Given the time, I have tried my level best to give the best UI-UX possible. Although I do have some pointers where the app can be improved:

- [ ] Manufacturing filter could have been enhanced on having `After` and `Before` date pickers for selecting the dates in the **range**.
- [ ] Integer based handling of the speed. It has been made query string friendly.
- [ ] Smaller screen UI could have been improved.
- [ ] Test cases in the project.
- [ ] A footer section will add more value to the web, talking more about the project and the developer.
- [ ] Filtering logic could have been improved on having optional filter selections, and not all. 

## Challenges Faced

The project was quite challenging, considering the fact that the delivery has to be close to perfect. There are few things which did test the developer's grit:

- Combining multiple filters and giving the right results
- Handling filters coming with associated filters like **Maximum Speed** having `Less than`, `More than`, and `Exactly`.
- Fixing bugs like updating the Input when the word changes and radio button is not selected.
- Deciding the optimum `query string` and the `filter params` suitable for best filtering logic and url friendliness.

## Feedback

There must be few bugs which will come while testing the app. I am open to feedback, as I firmly believe that a product becomes successful with the feedbacks. I will appreciate the time very much. Here is my email: `alokk830@gmail.com`


## FAQs

#### Q. How many days did you take to complete the taks?

I took close to `3 days`. It was given on `Friday, Feb 3rd 2023`, and it was submitted on `Wednesday, Feb 8th 2023`. Excluding `Satruday and Sunday` in between.

#### Q. How will the filter work for `All` and `Specific Searching` with the query string for API?

- The query string comes with a key called `show_all`, if the value is `true`, then just render all the items. And there is no need of looking at the other fields.
- If the `show_all` is set to `false`, that means a specific search has been asked by the user, which will clearly be reflected in the query string section on the home page.

#### Q. What is `rgb` or `r` or `g` or `b` in the query string?

- The `rgb` stands for `red`, `green` and `blue`. And individual represents the same color.
- This has been implemented to get the best results in the filtering. 

## License

This project is licensed under the MIT licence - see the [LICENCE](https://github.com/aloklearning/react-spaceship-finder/blob/main/LICENCE) for more details.

## Links

- [React Official Website](https://reactjs.org/)
- [How to Install NodeJS and NPM](https://kinsta.com/blog/how-to-install-node-js/)


