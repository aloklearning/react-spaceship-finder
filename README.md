# React Spaceship Finder 🚀

[![made-with-react](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://reactjs.org/)
[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![build](https://img.shields.io/appveyor/build/gruntjs/grunt)](https://pub.dev/packages/flutter_bounce#-analysis-tab-)

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to find the best spaceship from the various options in a web application.
- The UI/UX implementations and strategiies are purely developer's ([Alok Kumar](https://github.com/aloklearning)) work and there is no way it has been copy-pasted from other website.
- A very well crafted illustrations has been provided [here](https://github.com/aloklearning/react-spaceship-finder/blob/main/src/assets/github_resources/MrLittleZSearchingApp_Alok_Kumar_2023-02-08.pdf). Please do see that to know more about how the **app works**, and how it **looks like**.

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
- Comes with various validations like checking the range of **Maximum Speed**, and **Date of Manufacture**.
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
npm install && npm start
```

- It will first install the **depenedencies** of the project and then runs the app in the **development** mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Instructions

- A very well versed illustrations has been provided to best help out the users to understand how the app looks and works like. Please click [here](https://github.com/aloklearning/react-spaceship-finder/blob/main/src/assets/github_resources/MrLittleZSearchingApp_Alok_Kumar_2023-02-08.pdf).

## Improvements

A project can always be improved. I do have some pointers where the app can be improved:

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
