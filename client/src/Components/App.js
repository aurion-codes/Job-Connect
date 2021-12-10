import Header from './Header'
import '../App.css';
import {useState, useEffect } from 'react' 
import LoginSignupPage from './LoginSignupPage';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import NavBar from './NavBar';
import JobList from './JobList'
import MyJobs from './MyJobs'


function App() {
  const [login, setLogin] = useState(false)
  const [uselog, setUselog] = useState({})
  const [jobs, setJobs] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:3000/jobs')
    .then (response => response.json())
    .then (data => {
      setJobs(data)
      setUpdate(false)
    })
  }, [update])

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUselog(user) 
          setLogin(true)});
      }
    });
  }, []);

  

  function onLogin(user){
   setLogin(true)
   setUselog(user)

  }

  
  function onLogout() {
    setLogin(false)
    setUselog({})
  }

  return (
    <div >
      <Header  onLogout={onLogout} login={login} user={uselog}/><br/>
      <NavBar />    
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/login" element={ 
          <LoginSignupPage onLogin={onLogin} />     
        }/>
        <Route path="/jobs" element={<JobList jobs={jobs} user={uselog} setUpdate={setUpdate} login={login} />} />
        <Route path="/myjobs" element={<MyJobs login={login} jobs={jobs} user={uselog} setUpdate={setUpdate} />} />
      </Routes> 
    </div>
  );
}

export default App;
