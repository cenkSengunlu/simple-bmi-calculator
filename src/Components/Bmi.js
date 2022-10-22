import React, { useState, memo } from "react";

const Bmi = () => {
  const [user, setUser] = useState({});
  const [check] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  const getData = () => {
    setUser(JSON.parse(localStorage.getItem("user")));
  };
  return (
    <div className="w-96 bg-white raunded-lg pt-8 pb-5 px-10">
      {Object.keys(user).length > 0 && (
        <>
          <div>
            <h1 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-violet-600 from-rose-400">
                Kişi Bilgileri
              </span>
            </h1>
          </div>
          <div className="block text-gray-500 font-bold mb-1 mt-6 pr-4 ">
            İsim: {user.name}
          </div>
          <div className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 pt-5">
            Boy: {user.height / 100}
          </div>
          <div className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 pt-5">
            Kilo: {user.weight}
          </div>
          <div className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 pt-5">
            Endeks: {user.bmi.toFixed(1)}
          </div>
          <div className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 pt-5">
            Sonuç: {user.endeks}
          </div>
        </>
      )}

      <div
        className={`md:flex md:items-center ${
          Object.keys(user).length > 0 ? "mt-8" : ""
        }`}
      >
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            type="button"
            onClick={getData}
            disabled={Object.keys(check).length === 0}
          >
            Bilgileri Çek
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Bmi);
