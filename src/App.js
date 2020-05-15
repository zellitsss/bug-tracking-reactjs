import React from 'react';
import Axios from 'axios';
import qs from 'querystring';
import './App.css';
import Bug from './components/Bug';
import {BugStatusEnum} from './definitions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: [],
      isEditting: false,
      edittingName: '',
      edittingDescription: ''
    };
    this.apiUrl = 'http://localhost:3001/api/bugs';

    this.changeBugStatus = this.changeBugStatus.bind(this);
    this.changeEdittingState = this.changeEdittingState.bind(this);
    this.addNewBugRecord = this.addNewBugRecord.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  componentDidMount() {
    this.fetchBugsList();
  }

  render() {
    let bugsList = this.state.bugs.map((bug) =>
      <Bug data={bug} key={bug._id} changeBugStatusCallback={this.changeBugStatus}/>
    );
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-xl mx-auto bg-gray-300 p-4 text-center">
          <header className="app-title">Bugs Tracking</header>
          <section>
            <div className={this.state.isEditting ? 'hidden' : ''}>
              <div><button className="action-btn bg-blue-300" onClick={this.changeEdittingState}>Add new Bug</button></div>
            </div>
            <div className={this.state.isEditting ? '' : 'hidden'}>
              <form onSubmit={this.addNewBugRecord}>
                <div className="mb-2">
                  <input type="text" placeholder="Bug name" className="w-full px-2 py-1" name="name" value={this.state.edittingName} onChange={this.handleNameChange}/>
                </div>
                <div className="mb-2">
                  <textarea placeholder="Description" className="w-full p-2" name="description" value={this.state.edittingDescription} onChange={this.handleDescriptionChange}></textarea>
                </div>
                <div>
                  <button type="button" className="action-btn bg-gray-500 mx-1" onClick={this.changeEdittingState}>Cancel</button>
                  <button type="submit" className="action-btn bg-blue-300 mx-1">Add</button>
                </div>
              </form>
            </div>
          </section>
          <section className="bugs-list">
            {bugsList}
          </section>
        </div>
      </div>
    );
  }
  
  changeBugStatus(id) {
    let self = this;
    Axios.patch(self.apiUrl + '/' + id + '/status')
      .then(res => {
        
      })
      .catch(err => {

      }).then(() => {
        self.fetchBugsList();
      });
  }

  changeEdittingState() {
    this.setState(state => (
      {
        isEditting: !state.isEditting,
        edittingName: '',
        edittingDescription: ''
      }
    ));
  }

  addNewBugRecord(event) {
    if (this.state.edittingName !== '')
    {
      let self = this;
      let data = {
        name: this.state.edittingName,
        description: this.state.edittingDescription
      };
      Axios({
        method: 'post',
        url: self.apiUrl + '/',
        data: qs.stringify(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then((res) => {
          self.fetchBugsList();
        })
        .catch((err) => {
        });

      self.changeEdittingState();
    } else {
      
    }

    event.preventDefault();
  }

  handleNameChange(event) {
    this.setState({
      edittingName: event.target.value
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      edittingDescription: event.target.value
    });
  }

  fetchBugsList() {
    Axios.get(this.apiUrl + '/')
    .then((res) => {
      this.setState({
        bugs: res.data
      })
    })
    .catch((err) => {

    })
    .then(() => {

    });
  }

}

export default App;
