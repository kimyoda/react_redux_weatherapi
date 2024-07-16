import { useState } from "react";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";

function App() {
  // city state
  const [city, setCity] = useState("Seoul");
  // handle city search
  const handleCitySearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="background">
      <div className="box">
        {/* city search form*/}
        <form autoComplete="off" onSubmit={handleCitySearch}>
          <label>
            <Icon icon={search} size={20} />
          </label>
          <input
            type="text"
            className="city-input"
            placeholder="도시를 입력해주세요"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
}

export default App;
