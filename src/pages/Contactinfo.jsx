import Contact from "./Contactform";


function Contacts() {
  return (
    <div className="ContactMeClass" id="ContactMe" >
      <h2 className="title">
        Contact Me
      </h2>
      <nav id="contactme-nav">
        <a href="tel:678-548-2991">
        678-548-2991
        </a>
        <a href="allen_jaylon@yahoo.com">
        allen_jaylon@yahoo.com
        </a>
        <a href="https://github.com/jlonthegrea?tab=repositories" >
          GitHub
        </a>
      </nav>
    </div>
  );
}

export default Contacts;