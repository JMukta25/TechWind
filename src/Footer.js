import React from 'react'

export default function Footer() {
    let date=new Date();
let year=date.getFullYear();
  return (
    <div>
       <footer><p>Copyright @{year}</p></footer>
    </div>
  )
}
