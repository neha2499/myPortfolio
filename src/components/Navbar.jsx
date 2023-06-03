import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';

import {styles} from "../styles";

import {navLinks} from "../constants";

import {logo, menu, close} from "../assets"; 

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
  <nav className= {`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link to="/"  /* top of the page  */
      className='flex items-center gap-2'
      onClick={()=>{

        setActive(""); /*Keep track of where we are currently on the page*/
        window.scrollTo(0,0); /*scroll to the top the page  */
      }}
    >
      <img src={logo} alt="logo" className="w-9 h-9 object-contain "/>

      <p className='text-white text-[18px] font-bold cursor-pointer flex'>Neha &nbsp;
       <span className='sm:block hidden'>
      | Master of Engineering
      </span>
      {/* &nbsp is the unicode character spacing */}
      </p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
       {navLinks.map((Link)=>(
        <li key={Link.id}
        className={`${active === Link.title
           ? "text-whiite"
           : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
           onClick={()=>setActive(Link.title)}>
          <a href={`#${Link.id}`}> {Link.title}

          </a>
        </li>
       ))} 
       </ul> 

{/* /*The component is imported from the react package and the Link component is imported from the react-router-dom package.

The navLinks component takes a prop called Link, which is an array of user objects.

Inside the component's JSX, there is a div element containing a heading "Link" and an unordered list (ul) element.

The navLinks.map() function is used to iterate over the Link array. For each Link, a list item (li) is rendered with a key attribute set to the user.id.

Inside the list item, there is a Link component. The to prop of the Link component is set to Link.id, which presumably represents the Link's unique identifier.

 The Link.name is used as the text content of the link. */



/*a mobile application bar below */ }
  
  <div className='sm:hidden flex flex-1 justify-end items-center'>

   <img src={toggle ? close : menu}
   alt="menu"
   className='w-[128px] h-[28px] object-contain cursor-pointer'
   
   onClick={()=> setToggle(!toggle)} />


{/* The component likely imports the useState hook from the react package.

Inside the component, a state variable toggle and a setter function setToggle are defined using the useState hook. The initial value of toggle is false.

Inside the JSX, there is a div element with the class name sm:hidden flex flex-1 justify-end items-center. This class name suggests that the div is hidden on small screens (sm:hidden), occupies the available space (flex-1), and is flexbox-based with items aligned to the end (justify-end and items-center).

Inside the div, there is an img element. The src attribute of the img element is dynamically set based on the toggle state. If toggle is true, the close image is displayed; otherwise, the menu image is displayed. The alt attribute is set to "menu".

The img element has additional styling attributes: className with w-[128px] h-[28px] object-contain cursor-pointer. These styles likely control the width, height, object-fit, and cursor behavior of the image.

The onClick event handler is attached to the img element. When the image is clicked, the setToggle function is called with the negated value of toggle, toggling its state between true and false. */}

<div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}>
<ul className='list-none flex justify-end items-start flex-col gap-4'>
       {navLinks.map((Link)=>(
        <li key={Link.id}
        className={`${active === Link.title
           ? "text-whiite"
           : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
           onClick={()=>{
            setToggle(!toggle) /* everytime you click on one of the the link.title it gonna cause the toggle to change to false and  it cause to hide the content */
            setActive(Link.title)}}>
          <a href={`#${Link.id}`}> {Link.title}

          </a>
        </li>
       ))} 
       </ul>
</div>
  </div>

    </div>


  </nav>
  )
}

export default Navbar