# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web application- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

 //Your Answer
 Smart components have functions and logic as part of the component.  Dumb components do not have any functions.


 //Googled Answer
Smart components are app level components that perform functions and manage data while dumb components focus solely on the UI

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
Yarn is a respository for files.  Yarn is adding a file to the your database.  Javascript will be updated.

 //Googled Answer
With Yarn, engineers still have access to the npm registry, but can install packages more quickly and manage dependencies consistently across machines or in secure offline environments. NPM is updated.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes {
      constructor(props){
        super(props)
        this.state = {
          recipes:
            name: 'Meatballs',
            name: 'Mac & Cheese'

        }
      }

      render() {

        return (
          let { recipes } = this.state
          let newRecipes = recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

          <ul>
            <li>{recipes}<li>
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
number,

 //Googled Answer
number, color, date

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
State is a property of a class that can be changed through an event.

 //Googled Answer
“state” is an object that represents the parts of the app that can change.  if you’d like your app to do anything – if you want interactivity, adding and deleting things, logging in and out – that will involve state.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

 //Your Answer
 State is a property of class.  Props are property that can be passed between components that can include state..


 //Googled Answer
Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
