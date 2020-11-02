import React, { Component } from 'react'

import ProfilePage from '../../components/ProfilePage'

interface ProfileState {
  readonly title: string
  readonly name: string
  readonly profile: string
}

class Profile extends Component<any, ProfileState> {
  readonly state = {
    title: 'parent title',
    name: 'leslie',
    profile: 'Dan',
  }

  handleChangeTitle = (newTitle: string = 'parent title'): void => {
    this.setState({
      title: newTitle,
    })
  }
  handleChangeProfile = () => {
    this.setState({
      profile: 'leslie',
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            className="child-container"
            style={{ border: '1px solid #409FEE', padding: 10 }}
          >
            <p>Welcome to {this.state.profile}'s Profile</p>
            <ProfilePage user={this.state.profile} />
            <button onClick={this.handleChangeProfile}>Change profile</button>
          </div>
          <hr />
        </header>
      </div>
    )
  }
}

export default Profile
