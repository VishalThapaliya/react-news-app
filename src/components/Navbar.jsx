const Navbar = ({ setCategory }) => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="navbar-brand" role="button" onClick={ () => setCategory('general') }>Bibi News</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div className="nav-link" role="button" onClick={() => setCategory('technology') } >Technology</div>                    
                    <div className="nav-link" role="button" onClick={() => setCategory('business') }>Business</div>
                    <div className="nav-link" role="button" onClick={() => setCategory('entertainment') }>Entertainment</div>
                    <div className="nav-link" role="button" onClick={() => setCategory('health') }>Health</div>
                    <div className="nav-link" role="button" onClick={() => setCategory('science') }>Science</div>
                    <div className="nav-link" role="button" onClick={() => setCategory('sports') }>Sports</div>
                    
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar