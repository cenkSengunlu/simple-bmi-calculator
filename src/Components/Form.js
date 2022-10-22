import React, { useState, useEffect, memo } from "react";
import justText from "../Functions/justText";
import justNumber from "../Functions/justNumber";

const Form = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [gender, setGender] = useState(0);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const genders = ["Kadın", "Erkek"];

  const handleSubmit = (e) => {
    if (canSubmit) {
      const bmi = weight / Math.pow(height / 100, 2);
      let endeks;
      if (bmi < 18.5) {
        endeks = "Zayıfsınız";
      } else if (bmi >= 18.5 && bmi < 25) {
        endeks = "Normal kilodasınız";
      } else if (bmi >= 25 && bmi < 30) {
        endeks = "Fazla kilolusunuz";
      } else if (bmi >= 30 && bmi < 35) {
        endeks = "1. Derece obezsiniz";
      } else if (bmi >= 35 && bmi < 40) {
        endeks = "2. Derece obezsiniz";
      } else if (bmi >= 40) {
        endeks = "3. Derece obezsiniz";
      }

      e.preventDefault();
      setUser({
        name: name.trim(),
        height: height,
        weight: weight,
        gender: genders[gender - 1],
        bmi: bmi,
        endeks: endeks,
      });

      setName("");
      setHeight("");
      setWeight("");
      setGender(0);
    }
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const onNameChanged = (e) => {
    setName(e.target.value);
  };

  const onHeightChanged = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setHeight(result);
  };

  const onWeightChanged = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setWeight(result);
  };

  const canSubmit = [
    name.trim(),
    height.trim(),
    weight.trim(),
    gender !== 0,
  ].every(Boolean);

  return (
    <>
      <form
        className="w-full max-w-sm bg-white pt-8 pr-8 pb-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              İsim
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              onChange={onNameChanged}
              value={name}
              onKeyPress={(event) => justText(event)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-height"
            >
              Boy
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-height"
              type="text"
              onChange={onHeightChanged}
              value={height}
              onKeyPress={(event) => justNumber(event)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-weight"
            >
              Kilo
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-weight"
              type="text"
              onChange={onWeightChanged}
              value={weight}
              onKeyPress={(event) => justNumber(event)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Cinsiyet
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              value={gender}
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
              onChange={(e) => setGender(e.currentTarget.value)}
            >
              <option defaultValue="0">Seçiniz...</option>
              <option value="1">Kadın</option>
              <option value="2">Erkek</option>
            </select>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
              type="submit"
              disabled={!canSubmit}
            >
              Kaydet
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default memo(Form);
