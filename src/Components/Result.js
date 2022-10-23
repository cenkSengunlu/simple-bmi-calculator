import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Result = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  return (
    <>
      <div className="lg:w-6/12 px-4 md:px-0 pt-4">
        <div className="md:p-12 md:mx-6">
          <div className="text-center">
            <h2 className="text-5xl font-semibold mb-6 pb-1">Your Result</h2>
          </div>
          <hr className="mb-9" />
          <div className="mb-4 w-full flex">
            <div className=" mr-2 w-6/12 ">
              <div
                htmlFor="name"
                className="block mb-2 text-2xl font-semibold text-gray-900"
              >
                Hello, {user.name} {user.surname}
              </div>
            </div>
          </div>
          <div className="mb-4 mr-2 w-full flex">
            <div className="block mb-2 text-md font-semibold text-gray-900">
              Your BMI:{" "}
              <span
                className={`text-semibold text-xl ${
                  user.bmi >= 30
                    ? "text-red-600"
                    : user.bmi < 30 && user.bmi >= 25
                    ? "text-orange-600"
                    : "text-green-600"
                }`}
              >
                {user.bmi.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="mb-4 mr-2 w-full flex">
            <div className="block mb-10 text-md font-semibold text-gray-900">
              This is the World Health Organization's (WHO) recommended body
              weight based on BMI values for adults. It is used for both men and
              women, age 20 or older.
            </div>
          </div>

          <div className="text-center pt-1 mb-12 pb-1 flex ml-2 justify-end w-full">
            <NavLink
              to="/"
              className="inline-block bg-orange-500 font-semibold px-6 py-2.5 text-white rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-6/12 mb-3 mr-2"
            >
              Recalculate
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`lg:w-6/12 hidden lg:flex lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none aside ${
          user.gender === "Man" ? "aside-man" : "aside-woman"
        }`}
      >
        <p className="text-sm text-transparent select-none">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </>
  );
};

export default Result;
