/* eslint-disable array-callback-return */
import data from './api/data';
import './App.css';
import EmployeeList from './components/employee-list/employee-list';
import Information from './components/information/information'

let App = () => {
  let greeting = "Good Morning"
  let isLoggedIn = true
  let emojis = [
    { unicode: 0x1F600, id: 'grinning face', selected: false },
    { unicode: 0x1F601, id: 'beaming face with smiling eyes', selected: false },
    { unicode: 0x1F602, id: 'face with tears of joy', selected: false },
    { unicode: 0x1F603, id: 'grinning face with big eyes', selected: false },
    { unicode: 0x1F604, id: 'grinning face with smiling eyes', selected: false },
    { unicode: 0x1F605, id: 'grinning face with sweat', selected: false },
    { unicode: 0x1F606, id: 'grinning squinting face', selected: false }
  ]

  let displayEmojiName = (id) => {
    document.getElementById("emojiName").innerHTML = id
    emojis.map(emoji => {
      emoji.selected = emoji.id === id
      document.getElementsByClassName('select')[emojis.indexOf(emoji)]
        .style["background-color"] = emoji.selected ? 'grey' : 'white'
    })
  }

  return (
    <div className='container'>
      <h1 className='header'>Hello, React</h1>
      <p>{greeting}</p>
      <div id="display" >
        <Information />
        <ul>
          {emojis.map(emoji =>
            <li key={emoji.id}>
              <button className="select" onClick={() => displayEmojiName(emoji.id)}>
                <span id={emoji.id}>{String.fromCodePoint(emoji.unicode)}</span>
              </button>
            </li>
          )}
        </ul>
        <p id="emojiName"></p>
        <Information />
      </div>
      <button id="btnLog" onClick={() => {
        isLoggedIn = !isLoggedIn
        document.getElementById("btnLog").innerHTML = isLoggedIn ? "Logout" : "Login"
        isLoggedIn ? document.getElementById("display").style = "display:block" :
          document.getElementById("display").style = "display:none"
      }}>Logout</button>
      *****************
      <EmployeeList employees={data} />
    </div>
  )
}

export default App