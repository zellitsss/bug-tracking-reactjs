import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div class="min-h-screen py-8">
        <div className="max-w-xl mx-auto bg-gray-300 p-4 text-center">
          <header className="app-title">Bugs Tracking</header>
          <section>filter</section>
          <section className="bugs-list">
            <div className="bug-item">
              <div className="bug-header">
                <span className="bug-badge opened">Opened</span>Aliqua commodo veniam Lorem reprehenderit consequat esse deserunt.
              </div>
              <div className="bug-description">
                <div className="text-justify">
                  Est dolor occaecat veniam nostrud excepteur incididunt in. Velit deserunt duis consectetur velit laboris officia qui duis dolore sit eu. Occaecat non dolore minim ex ullamco officia sint ea excepteur magna do mollit proident aliquip. Eiusmod nostrud do sit ea duis minim aliqua do duis. Et consequat excepteur esse et elit adipisicing pariatur occaecat deserunt exercitation reprehenderit. Sunt incididunt laborum laborum duis laboris id amet ex id.
                </div>
                <div>
                  <button className="action-btn resolve">Mark as Resolved</button>
                </div>
              </div>
            </div>

            <div className="bug-item">
              <div className="bug-header">
                <span className="bug-badge resolved">Resolved</span>Aliqua commodo veniam Lorem reprehenderit consequat esse deserunt.
              </div>
              <div className="bug-description">
                <div className="text-justify">
                  Est dolor occaecat veniam nostrud excepteur incididunt in. Velit deserunt duis consectetur velit laboris officia qui duis dolore sit eu. Occaecat non dolore minim ex ullamco officia sint ea excepteur magna do mollit proident aliquip. Eiusmod nostrud do sit ea duis minim aliqua do duis. Et consequat excepteur esse et elit adipisicing pariatur occaecat deserunt exercitation reprehenderit. Sunt incididunt laborum laborum duis laboris id amet ex id.
                </div>
                <div>
                  <button className="action-btn reopen">Reopen</button>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    );
  }
}

export default App;
