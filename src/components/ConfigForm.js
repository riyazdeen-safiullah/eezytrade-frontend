import React, { useState } from "react";
import "./ConfigForm.css";

const ConfigForm = () => {
  const [stocks, setStocks] = useState([]);
  const [capital, setCapital] = useState(0);
  const [support, setSupport] = useState(1);
  const [resistance, setResistance] = useState(1);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [selectedInstrument, setSelectedInstrument] = useState(""); // Default: No selection

  const allStocks = Array.from({ length: 50 }, (_, i) => `Stock${i + 1}`); // Mock 50 stocks
  const shariahStocks = ["Stock3", "Stock7", "Stock10", "Stock12", "Stock14",
    "Stock16", "Stock19", "Stock20", "Stock25", "Stock26",
    "Stock28", "Stock31", "Stock35", "Stock37", "Stock40",
    "Stock43", "Stock44", "Stock47", "Stock49", "Stock50"]; // Mock Shariah-compliant stocks

  const handleInstrumentChange = (instrument) => {
    setSelectedInstrument(instrument);
    if (instrument === "Top 50") {
      setStocks([...allStocks]);
      setCapital(allStocks.length * 10000);
    } else {
      setStocks([]); // Reset stocks for other options
      setCapital(0);
    }
  };

  const handleStockSelection = (stock) => {
    if (selectedInstrument === "Top 50") return; // Prevent manual selection for "Top 50"

    setStocks((prev) =>
      prev.includes(stock) ? prev.filter((s) => s !== stock) : [...prev, stock]
    );

    // Update capital
    const updatedCapital = stocks.includes(stock)
      ? capital - 10000
      : capital + 10000;
    setCapital(updatedCapital);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ stocks, capital, support, resistance, isFirstTime });
  };

  // Determine stocks to display based on selected instrument
  const displayedStocks =
    selectedInstrument === "Shariah" ? shariahStocks : allStocks;

  return (
    <div className="config-container">
      <div className="config-box">
        <h2 className="config-heading">Trading Configuration</h2>
        <form onSubmit={handleSubmit}>
          {/* Instrument Selection */}
          <div className="form-group">
            <h3>Select Instruments</h3>
            <div className="horizontal-group">
              <label>
                <input
                  type="radio"
                  name="instruments"
                  value="Top 50"
                  checked={selectedInstrument === "Top 50"}
                  onChange={() => handleInstrumentChange("Top 50")}
                />{" "}
                All Top 50 Stocks
              </label>
              <label>
                <input
                  type="radio"
                  name="instruments"
                  value="Selective"
                  checked={selectedInstrument === "Selective"}
                  onChange={() => handleInstrumentChange("Selective")}
                />{" "}
                Selective Stocks
              </label>
              <label>
                <input
                  type="radio"
                  name="instruments"
                  value="Shariah"
                  checked={selectedInstrument === "Shariah"}
                  onChange={() => handleInstrumentChange("Shariah")}
                />{" "}
                Shariah Compliant
              </label>
            </div>
          </div>

          {/* Stock Selection */}
          <div className="form-group">
            {selectedInstrument !== "Top 50" && (
              <p className="stock-selection-info">
                Minimum 10 stocks should be selected
              </p>
            )}
            <h3>Select Stocks</h3>
            <div className="stock-selection">
              {displayedStocks.map((stock) => (
                <span
                  key={stock}
                  className={`stock-tag ${
                    stocks.includes(stock) ? "selected" : ""
                  }`}
                  onClick={() => handleStockSelection(stock)}
                >
                  {stock}
                </span>
              ))}
            </div>
          </div>

          {/* Capital Input */}
          <div className="form-group">
            <h3>Total Capital (Minimum: INR {stocks.length * 10000})</h3>
            <input
              type="range"
              min={stocks.length * 10000 || 10000}
              max={1000000}
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
            />
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
            />
          </div>

          {/* Support and Resistance */}
          <div className="form-group">
          <h3>Support and Resistance Configuration</h3>
          <div className="support-resistance-group">
            {/* Support Slider */}
            <div className="slider-container">
              <label>Support % (1–10):</label>
              <input
                type="range"
                min="1"
                max="10"
                value={support}
                onChange={(e) => setSupport(Number(e.target.value))}
              />
              <span className="value-label">{support}%</span>
            </div>

            {/* Resistance Slider */}
            <div className="slider-container">
              <label>Resistance % (1–6):</label>
              <input
                type="range"
                min="1"
                max="6"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
              />
              <span className="value-label">{resistance}%</span>
            </div>
          </div>
        </div>



          {/* First Time Trading */}
          <div className="form-group horizontal-group">
            <label>Are you trading for the first time?</label>
            <label>
              <input
                type="radio"
                name="firstTime"
                value="Yes"
                checked={isFirstTime}
                onChange={() => setIsFirstTime(true)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="firstTime"
                value="No"
                checked={!isFirstTime}
                onChange={() => setIsFirstTime(false)}
              />{" "}
              No
            </label>
          </div>

          <button type="submit" className="btn-config-save">
            Save Configuration
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfigForm;