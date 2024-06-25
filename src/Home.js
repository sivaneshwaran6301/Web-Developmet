import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <>
    
    <div id="content">

    </div>
    <div id="fields">
      <form>
    <div class="form">
      <label>Name</label>
      <input placeholder='Enter the name'></input>
    </div>
     <div class="form">
      <label>Email</label>
      <input placeholder='Enter the email'></input>
    </div>
    <div class="form">
      <label>Password</label>
      <input placeholder='Password'></input>
    </div>
    <div class="form">
      <label>Gender</label>
     <select Name="Male/Female/Transgender" id="gender">
      <option>Male</option>
      <option>Female</option>
      <option>Transgender</option>
     </select>
    </div>
    <div class="form">
      <label>Date of Birth</label>
      <input type="date" name="dd/mm/yyyy"></input>
    </div> 
    <button id="submit" >SUBMIT</button>
    </form>
    </div>
    </>
  );
}

export default Home;
