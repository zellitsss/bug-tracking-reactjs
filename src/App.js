import React from 'react';
import './App.css';
import Bug from './components/Bug';
import {BugStatusEnum} from './definitions';

const bugs = [
  {
    id: 1,
    status: 0,
    name: 'Ut cillum dolore sit et occaecat pariatur mollit occaecat culpa excepteur tempor ut pariatur.',
    description: 'Voluptate occaecat enim incididunt cillum. Cupidatat pariatur nisi minim consequat excepteur culpa elit non tempor. Ut et consectetur est minim cillum veniam est esse amet et anim excepteur amet est. Labore nisi tempor officia deserunt.'
  },
  {
    id: 2,
    status: 0,
    name: 'Ea enim esse anim aliquip sint anim consequat in commodo consectetur do aute ullamco.',
    description: 'Irure est exercitation id commodo aliqua et esse cillum eu adipisicing est aliquip do deserunt. Minim minim laborum fugiat qui incididunt adipisicing amet do reprehenderit. Non excepteur officia ad anim laborum tempor fugiat in. Magna labore id non aliqua nulla magna sit minim ipsum irure consequat. Ex ut elit pariatur cupidatat dolor. Est nulla aute amet ipsum.'
  },
  {
    id: 3,
    status: 1,
    name: 'Nulla adipisicing deserunt aliquip pariatur laboris sunt duis anim occaecat dolore consectetur reprehenderit laborum proident.',
    description: 'Culpa consequat ullamco duis laboris elit ullamco qui reprehenderit quis. Occaecat sit ex dolore cillum quis anim commodo dolor deserunt est. Adipisicing do sint adipisicing sint qui ad.'
  },
  {
    id: 4,
    status: 0,
    name: 'Nostrud adipisicing id quis proident dolore do occaecat magna sint tempor sunt et voluptate velit.',
    description: 'Amet cillum amet duis cillum sunt occaecat anim nostrud. Sint est consequat qui nulla occaecat minim proident incididunt cillum sit. In dolore minim qui ad ex officia sit anim reprehenderit et. Pariatur ipsum commodo amet esse enim occaecat aute qui sunt consectetur. Minim id labore magna reprehenderit enim labore anim laboris aliquip elit. Commodo nisi ea enim veniam minim cupidatat labore nulla occaecat et velit aute non.'
  },
  {
    id: 5,
    status: 1,
    name: 'Dolor ea pariatur qui exercitation ex mollit quis.',
    description: 'Pariatur ea officia in do. Qui fugiat non elit sunt sint anim sint commodo id elit laboris nisi. Eu ad sint ipsum nulla voluptate aute et consequat consectetur voluptate esse. Quis eiusmod veniam aliquip cillum adipisicing laboris culpa laborum minim ea.'
  },
  {
    id: 6,
    status: 0,
    name: 'Nisi quis duis pariatur ut fugiat laboris Lorem Lorem voluptate id qui.',
    description: 'Minim ex sint excepteur tempor culpa culpa consequat labore adipisicing minim exercitation aliqua officia. Anim ut consectetur duis anim deserunt anim occaecat exercitation cupidatat quis consectetur amet. Laborum irure ex non ea voluptate officia eu cupidatat id ea dolor.'
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: bugs
    };

    this.changeBugStatus = this.changeBugStatus.bind(this);
  }
  render() {
    let bugsList = this.state.bugs.map((bug) =>
      <Bug data={bug} key={bug.id.toString()} changeBugStatusCallback={this.changeBugStatus}/>
    );
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-xl mx-auto bg-gray-300 p-4 text-center">
          <header className="app-title">Bugs Tracking</header>
          <section>filter</section>
          <section className="bugs-list">
            {bugsList}
          </section>
        </div>
      </div>
    );
  }
  
  changeBugStatus(id) {
    let bugs = this.state.bugs;
    let found = bugs.find(bug => {
      return bug.id === id;
    });
    if (found !== undefined) {
      switch (found.status) {
        case BugStatusEnum.Opened:
          found.status = BugStatusEnum.Resolve;
          break;
        case BugStatusEnum.Resolve:
          found.status = BugStatusEnum.Opened;
          break;
        default:
          break;
      }
      this.setState({
        bugs: bugs
      });
    }
  }
}

export default App;
