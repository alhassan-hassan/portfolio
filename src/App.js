import './App.css'
import NavBar from '../src/components/nav-bar/NavBar'
import Profile from '../src/components/profile/Profile'
import Services from '../src/components/services/Services'
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState(true)
  const [cols, setCols] = useState({background: "black",color: "white"})
  const [navs, setNavs] = useState({home:true, projects: false, services:false})
  const [iconStyle, setIconStyle] = useState({color: 'white'});
  const[linear, setLinear] = useState("linear-gradient(to right, #434343 0%, black 100%)")

  const onLight = () => {
    setMode(false)
    setCols ({background: "white", color: "black"})
    setIconStyle({...iconStyle, color: "black"})
    setLinear("white")
  }

  const onDark = () => {
    setMode(true)
    setCols ({background: "black", color: "white"})
    setIconStyle({...iconStyle, color: "white"})
    setLinear("linear-gradient(to right, #434343 0%, black 100%)")
  }

  const navToggle = (chosen) => {
    const updatedNavs = Object.fromEntries(Object.keys(navs).map(key => [key, false]));
    updatedNavs[chosen] = true;
    setNavs(updatedNavs);
  }

  return (
    <div className="App" style={{background: cols.background, color: cols.color}}>
      <NavBar 
          mode={mode} onDark={onDark} onLight={onLight}
          bcol={cols.color} border={cols.color}
          home = {navs.home} projects = {navs.projects} services = {navs.services}
          navToggle = {navToggle}
          backer = {cols.background}
          />

      <div className='below-nav'>
          <Profile 
            iconStyle = {iconStyle} text_col = {cols.color} linear = {linear} mode = {mode}
          />
          <Services linear = {linear} mode = {mode}/>
        </div>
      </div>
  );
}

export default App;
