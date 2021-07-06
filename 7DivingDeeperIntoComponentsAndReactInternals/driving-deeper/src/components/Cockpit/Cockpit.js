import React, { useEffect } from "react";

import classes from "./Cockpit.module.css";

const cockpit = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // HTTP request...
    //const timer =
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";

  console.log({ props });

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  //const btnClass = props.showPersons ? classes.Red : "";

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //classes=['red']
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); //classes=['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toogle Persons
      </button>
    </div>
  );
};

// React.memo()
//When deciding to update DOM, React first renders your component,
// then compares the result with the previous render.
// If the render results are different, React updates the DOM.
export default React.memo(cockpit);
