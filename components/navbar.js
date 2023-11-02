function navbar() {
  return `<div id="first_side">
    <span id="bar">
      <i class="fa-solid fa-bars"></i>
    </span>
    <span id="bar">
      <img
        src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
        alt=""
      />
    </span>
    <span>TV</span>
    <span>Movies</span>
    <span>Sports</span>
    <span>Disney+</span>
  </div>
  <div id="second_side">
    <span id="search">
      <input type="text" placeholder="search" id="searchItem" />

      <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
      <hr />
    </span>
    <span id="up">
      <button><a href="signup.html">Sign Up</a></button>
    </span>
    <span id="in">
      <button><a href="login.html">Lging</a></button>
    </span>
  </div>`;
}

export default navbar;
