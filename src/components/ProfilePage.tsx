import React from 'react'
import { Button } from 'antd'

interface UserProps {
  user: string
}
class ProfilePage extends React.Component<UserProps> {
  showMessage = () => {
    alert('Followed ' + this.props.user)
  }
  handleClick = () => {
    setTimeout(this.showMessage, 3000)
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Follow</Button>
      </div>
    )
  }
}

export default ProfilePage
