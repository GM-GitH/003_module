export default function Search() {
  return (
    <div>
      <br />
      <h1 className="search-page__h1">Use the most powerful photo engine in the world:</h1>
      <br />
      <div className="search-page__form">
        <input className="search-input" type="text" id="search-input" name="search-input" placeholder="Search..." required />
        <button className="send-button" id="send-button" type="submit">
          Go!
        </button>
      </div>
    </div>
  );
}
