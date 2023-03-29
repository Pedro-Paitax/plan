import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [originalValue, setOriginalValue] = useState("");
  const [originalScale, setOriginalScale] = useState("celsius");
  const [convertedValue, setConvertedValue] = useState("");
  const [convertedScale, setConvertedScale] = useState("fahrenheit");

  const handleConvert = (e) => {
    e.preventDefault();
    let converted;
    const value = parseFloat(originalValue);

    if (originalScale === "celsius") {
      if (convertedScale === "fahrenheit") {
        converted = (value * 9) / 5 + 32;
      } else if (convertedScale === "kelvin") {
        converted = value + 273.15;
      } else {
        converted = value;
      }
    } else if (originalScale === "fahrenheit") {
      if (convertedScale === "celsius") {
        converted = ((value - 32) * 5) / 9;
      } else if (convertedScale === "kelvin") {
        converted = ((value - 32) * 5) / 9 + 273.15;
      } else {
        converted = value;
      }
    } else if (originalScale === "kelvin") {
      if (convertedScale === "celsius") {
        converted = value - 273.15;
      } else if (convertedScale === "fahrenheit") {
        converted = ((value - 273.15) * 9) / 5 + 32;
      } else {
        converted = value;
      }
    } else {
      converted = "";
    }

    setConvertedValue(converted.toFixed(2));
  };

  return (
    <>
      <div className="flex h-full items-center justify-center">
        <h1 className="mi flex text-center mx-auto mb-8 mt-8">
          Conversor de Escala
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleConvert} className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center max-w-md">
            <label
              htmlFor="original-value"
              className="mr mb-2 md:mb-0 md:mr-7"
              style={{ whiteSpace: "nowrap" }}
            >
              Valor original:
            </label>
            <input
              id="original-value"
              type="number"
              value={originalValue}
              onChange={(e) => setOriginalValue(e.target.value)}
              className="mb-4 w-40 px-2 py-1 border border-gray-300 rounded-md"
              style={{ "-moz-appearance": "textfield" }}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <label htmlFor="original-scale" className="mb-2 ">
              Escala original:
            </label>
            <select
              id="original-scale"
              value={originalScale}
              onChange={(e) => setOriginalScale(e.target.value)}
              className="mb-4 md:flex-1 w-40 px-2 py-1 border border-gray-300 rounded-md"
              >
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
          </div>
          <button
            type="submit"
            className="mb-4 px-4 py-2 me text-slate-200 bg-stone-800 rounded-md hover:bg-stone-900"
          >
            Converter
          </button>
          <div className="flex flex-col md:flex-row items-center max-w-md">
            <label
              htmlFor="converted-value"
              className="mb-2 md:mb-0 md:mr-2"
              style={{ whiteSpace: "nowrap" }}
            >
              Valor convertido:
            </label>
            <input
              id="converted-value"
              type="text"
              value={convertedValue || ""}
              readOnly
              className="mb-4 w-40 px-2 py-1 border border-gray-300 rounded-md"
            />
            <label htmlFor="converted-scale" className="mb-2 ">
              Escala convertida:
            </label>
            <select
              id="converted-scale"
              value={convertedScale}
              onChange={(e) => setConvertedScale(e.target.value)}
              className="mb-4 w-40 px-2 py-1 border border-gray-300 rounded-md"
            >
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
