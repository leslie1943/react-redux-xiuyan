import React from 'react'

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
      <div style={{ border: '1px solid #fff', padding: 10 }}>
        <button
          style={{ background: '#409FEE', border: 0 }}
          onClick={this.handleClick}
        >
          Follow
        </button>
      </div>
    )
  }
}

export default ProfilePage
