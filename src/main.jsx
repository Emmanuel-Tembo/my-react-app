import './index.css'
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById("root"))
import logo from '../src/assets/react-logo.png'

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the order ed list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

    function Header (){
        return (
            <div>
                <img src={logo} alt="React-Logo" width={50} />
            </div>
        )
    };  

    function Title (){
        return <h1>Reasons I am exited to learn React</h1>
    }
    function Content(){
        return (
            <ul>
                <li>haha</li>
                <li>wazaaaaa</li>
                <li>phllbbbbbtt</li>
            </ul>
        )
    }

root.render(
    <div>
        <div  style={{display:'flex',alignItems:'center',gap:'5px'}}>
            <Header />
            <Title />
        </div>
        <Content />
    </div>
    
)
