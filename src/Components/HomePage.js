import React, { memo } from "react";
import Form from "./Form";
import Result from "./Result";
import { Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="gradient-form bg-gray-200 md:h-screen flex justify-center items-center">
      <div className="container py-12 px-6 h-screen flex justify-center items-center ">
        <div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <Routes>
                  <Route path="/" element={<Form />} />
                  <Route path="/result" element={<Result />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HomePage);
