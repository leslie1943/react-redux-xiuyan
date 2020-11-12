import React from 'react'
import { Link } from 'react-router-dom'

export default function Bus() {
  return (
    <ul>
      <li>
        <Link to="/xxx/1943">1943</Link>
      </li>
      <li>
        <Link to={'/xxx/1840'}>1840</Link>
      </li>
      <li>
        <Link to="/xxx/2002">2002</Link>
      </li>
      <li>
        <Link to="/xxx/3721">3721</Link>
      </li>
    </ul>
  )
}

// export default () => (
//   <div>
//     <p>Bus 1</p>
//     <p>Bus 2</p>
//     <p>Bus 3</p>
//     <p>Bus 4</p>
//     <p>Bus 5</p>
//   </div>
// )
