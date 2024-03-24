import {} from './navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        {/* <Sidebar></Sidebar> */}
        <div className="wrapper">
            <span>Moein Kameli</span>
            <div className="social">
                <a href='https://www.linkedin.com/in/moein-kameli-4596791b8/'><img src="/linkedin.png"></img></a>
                <a href='https://github.com/moeinkm'><img src="/github.png"></img></a>
                <a href='https://stackoverflow.com/users/9491733/moein-kameli'><img src="/stackoverflow.png"></img></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar