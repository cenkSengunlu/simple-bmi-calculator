import React, { useState } from "react";
import justText from "../Functions/justText";
import justNumber from "../Functions/justNumber";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState(
    JSON.parse(
      localStorage.getItem("user") || {
        name: "",
        surname: "",
        gender: "",
        height: "",
        weight: "",
        birthDate: "",
        bmi: 0,
        result: "",
      }
    )
  );
  const navigate = useNavigate();

  const onNameChanged = (e) => {
    setUser((user) => ({ ...user, name: e.target.value }));
  };

  const onBirthDateChanged = (e) => {
    setUser((user) => ({ ...user, birthDate: e.target.value }));
  };

  const onSurnameChanged = (e) => {
    setUser((user) => ({ ...user, surname: e.target.value }));
  };

  const onHeightChanged = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setUser((user) => ({ ...user, height: result }));
  };

  const onWeightChanged = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setUser((user) => ({ ...user, weight: result }));
  };

  const canSubmit = [
    user.name.trim(),
    user.surname.trim(),
    user.height.trim(),
    user.weight.trim(),
    user.birthDate.trim(),
    user.gender !== "select",
  ].every(Boolean);

  const handleSubmit = (e) => {
    if (canSubmit) {
      e.preventDefault();
      const bmi = user.weight / Math.pow(user.height / 100, 2);
      let result;
      if (bmi < 18.5) {
        result = "Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal";
      } else if (bmi >= 25 && bmi < 30) {
        result = "Overweight";
      } else if (bmi >= 30 && bmi < 35) {
        result = "Obese Class I";
      } else if (bmi >= 35 && bmi < 40) {
        result = "Obese Class II";
      } else if (bmi >= 40) {
        result = "Obese Class III";
      }
      const newUser = {
        ...user,
        bmi: bmi,
        result: result,
      };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate(`/result`);
    }
  };

  const handleClear = () => {};
  return (
    <>
      <div className="lg:w-6/12 px-4 md:px-0 pt-4">
        <div className="md:p-12 md:mx-6">
          <div className="text-center">
            <h2 className="text-5xl font-semibold mb-12 pb-1">
              BMI Calculator
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 w-full flex">
              <div className=" mr-2 w-6/12 ">
                <label
                  htmlFor="name"
                  className="block mb-2 text-md font-semibold text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="name"
                  onChange={onNameChanged}
                  value={user.name}
                  onKeyPress={(event) => justText(event)}
                />
              </div>
              <div className="ml-2 w-6/12 ">
                <label
                  htmlFor="surname"
                  className="block mb-2 text-md font-semibold text-gray-900"
                >
                  Surname
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="surname"
                  onChange={onSurnameChanged}
                  value={user.surname}
                  onKeyPress={(event) => justText(event)}
                />
              </div>
            </div>
            <div className="mb-4 w-full flex">
              <div className=" mr-2 w-6/12 ">
                <label
                  htmlFor="height"
                  className="block mb-2 text-md font-semibold text-gray-900"
                >
                  Height (cm)
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="height"
                  onChange={onHeightChanged}
                  value={user.height}
                  onKeyPress={(event) => justNumber(event)}
                />
              </div>
              <div className="ml-2 w-6/12 ">
                <label
                  htmlFor="weight"
                  className="block mb-2 text-md font-semibold text-gray-900"
                >
                  Weight (kg)
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="weight"
                  onChange={onWeightChanged}
                  value={user.weight}
                  onKeyPress={(event) => justNumber(event)}
                />
              </div>
            </div>
            <div className="mb-4 w-full flex">
              <div className=" mr-2 w-6/12 ">
                <label
                  className="block mb-2 text-md font-semibold text-gray-900"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <select
                  value={user.gender}
                  className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="gender"
                  onChange={(e) =>
                    setUser((user) => ({ ...user, gender: e.target.value }))
                  }
                >
                  <option defaultValue="select">Select...</option>
                  <option value="Woman">Woman</option>
                  <option value="Man">Man</option>
                </select>
              </div>
              <div className="ml-2 w-6/12 ">
                <label
                  htmlFor="birthdate"
                  className="block mb-2 text-md font-semibold text-gray-900"
                >
                  Birth Date
                </label>
                <input
                  type="date"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="birthDate"
                  onChange={onBirthDateChanged}
                  value={user.birthDate}
                />
              </div>
            </div>

            <div className="text-center pt-1 mb-12 pb-1 flex w-full">
              <button
                className="inline-block bg-orange-500 font-semibold px-6 py-2.5 text-white rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-6/12 mb-3 mr-2"
                type="button"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                className={`inline-block  font-semibold px-6 py-2.5 text-white rounded shadow-md  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out cursor-pointer ${
                  !canSubmit
                    ? "bg-gray-500"
                    : "bg-green-500 hover:bg-green-600 hover:shadow-lg"
                } w-6/12 mb-3 ml-2`}
                type="submit"
                disabled={!canSubmit}
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:w-6/12 hidden lg:flex lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none aside aside-form">
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

export default Form;
