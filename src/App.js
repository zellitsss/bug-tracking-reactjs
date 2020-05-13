import React from 'react';
import './App.css';
import Bug from './components/Bug';

const data = {
  status: 0,
  name: 'Aliqua commodo veniam Lorem reprehenderit consequat esse deserunt.',
  description: 'Anim adipisicing amet elit exercitation voluptate. Aute adipisicing adipisicing elit dolor ullamco veniam quis elit ea aute. Nisi culpa dolor officia aliqua mollit sunt pariatur occaecat anim incididunt. Sint occaecat magna ipsum duis. Duis fugiat deserunt in minim excepteur commodo consectetur aute eu. Officia consequat aute anim reprehenderit cillum minim.'
};

class App extends React.Component {
  render() {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-xl mx-auto bg-gray-300 p-4 text-center">
          <header className="app-title">Bugs Tracking</header>
          <section>filter</section>
          <section className="bugs-list">
            <Bug data={data}/>

          </section>
        </div>
      </div>
    );
  }
}

export default App;
