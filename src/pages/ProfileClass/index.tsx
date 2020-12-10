import React, { Component } from 'react'
import { Button } from 'antd'

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
      <div style={{ margin: 50 }}>
        <h1>Welcome to {this.state.profile}'s Profile</h1>
        <ProfilePage user={this.state.profile} />
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.handleChangeProfile}>
            Change profile
          </Button>
        </div>
      </div>
    )
  }
}

export default Profile
