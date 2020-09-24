import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

state = {
  name: 'please input your name',
  sex: 'male',
  description: '',
  isAgree: true
  }

  // 在点击的时候不会出现刷新提交
  /* handleSubmit = (event) => {
    event.preventDefault();
  }
  
  handleName = (event) => {
   
    this.setState({
      name: event.target.value
    })
  }

    handleSex = (event) => {
      this.setState({
      sex: event.target.value
    })
  } */
  
  handleDescription = (event) => {
    this.setState({
      desc: event.target.value   
    })
  }
  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
     [name]: value
    });
  }


  render() {
    return (
      <form onSubmit={this.handleInputChange}> 
         <h1>My  Profile</h1>
        <label><p>Name</p>
          <input type='text' name='name' onChange={this.handleInputChange} value={this.state.name} defaultValue={this.state.value}></input>
        </label>
        <br />
        <br />
       
        <label>Gender<br/>
           <select name='gender' value={this.state.sex} onChange={this.handleInputChange}>
              <option value="female">female</option>
              <option value="male">male</option>
          </select></label><br></br><br />
        <label>Description<br/>
           <textarea name='description' value={this.state.description} onChange={this.handleInputChange} placeholder='Description about yourself'></textarea>
        </label>
        <br/>
        <label>
          <input type="checkbox" name="isAgree" value={this.state.isAgree} defaultChecked={this.state.isAgree} onChange={this.handleInputChange}></input>
          <p>i have read the terms of  conduct</p>
        </label>
        <br />
        <input  type='submit' value='Submit' disabled={!this.state.name || !this.state.isAgree || !this.state.sex || !this.state.description}></input>
        {console.log(this.state)}
      </form>
    );
  }
}

export default MyProfile;


