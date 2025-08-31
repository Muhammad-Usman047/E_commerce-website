import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar">
        <div className="links">
          <Link className='imglogo' to='/'><img src={props.logo} alt="" /><div>{props.CartGenie}</div></Link>
          <div className='linkscomponents'>
            <Link to='/'>{props.F1}</Link>
            <Link to='/Products'>{props.F2}</Link>
            <Link to='/Blog'>{props.F3}</Link>
            <Link to='/Contact'>{props.F4}</Link>
            <Link to='/CreateAccount' className='createlink' /* style={{backgroundColor:"rgba(245, 198, 56, 1)", padding:"15px", borderRadius: "10px"}}*/>{props.F5}</Link>
            <Link to='/Signin'>{props.F6}</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

