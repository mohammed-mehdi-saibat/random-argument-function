"use strict";

function randomArgument(a, b, c) {
  return typeof a === "string" &&
    typeof b === "number" &&
    typeof c === "boolean"
    ? `Hello ${a}, Your Age is ${b}, You Are ${
        c ? "Available" : "Not Available"
      } For Hire`
    : typeof a === "boolean" && typeof b === "string" && typeof c === "number"
    ? `Hello ${b}, Your Age is ${c}, You Are ${
        a ? "Available" : "Not Available"
      } For Hire`
    : typeof a === "number" && typeof b === "boolean" && typeof c === "string"
    ? `Hello ${c}, Your Age is ${a}, You Are ${
        b ? "Available" : "Not Available"
      } For Hire`
    : typeof a === "boolean" && typeof b === "number" && typeof c === "string"
    ? `Hello ${c}, Your Age is ${b}, You Are ${
        a ? "Available" : "Not Available"
      } For Hire`
    : typeof a === "number" && typeof b === "string" && typeof c === "boolean"
    ? `Hello ${b}, Your Age is ${a}, You Are ${
        c ? "Available" : "Not Available"
      } For Hire`
    : typeof a === "string" && typeof b === "boolean" && typeof c === "number"
    ? `Hello ${a}, Your Age is ${c}, You Are ${
        b ? "Available" : "Not Available"
      } For Hire`
    : -1;
}
