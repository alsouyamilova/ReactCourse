import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
const rootEl = document.getElementById('root')
const root = createRoot(rootEl)
// root.render(createElement("ul", {}, //{style: {color: "red"}, className: "test test1 test2"},
//   [1,2,3,4].map((item) => createElement("li", {}, "item"+item)) 
// ))
root.render(<ul style={{color: "blue"}}>
{[1,2,3,4].map((item) =><li>item {item}</li>)}
</ul>)
