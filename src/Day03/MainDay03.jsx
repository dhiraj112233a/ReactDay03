import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Contact from './Contact'
import Blog from './Blog'
import Nav from './Nav'
import Home from './Home'

const MainDay03 = () => {

    // const one =[
    //     {
    //         nav1:"About",
    //         nav2:"Portfolio",
    //         nav3:"Services",
    //         nav4:"Blog",
    //         nav5:"Contact"
    //     }
    // ]

    const about =[
        {
            
            h2:"Residential Design",
            p:"Creating personalized living environments that reflect your lifestyle, taste, and the way you truly live in your home.",
            a:'Learn More'
        },
         {
            
            h2:"Commercial Design",
            p:"Creating personalized living environments that reflect your lifestyle, taste, and the way you truly live in your home.",
            a:'Learn More'
        },
         {
            
            h2:"Hospitality Design",
            p:"Creating personalized living environments that reflect your lifestyle, taste, and the way you truly live in your home.",
            a:'Learn More'
        },
         {
            
            h2:"Color & Material Consulting",
            p:"Creating personalized living environments that reflect your lifestyle, taste, and the way you truly live in your home.",
            a:'Learn More'
        },
         {
            
            h2:"Space Planning Consulting",
            p:"Creating personalized living environments that reflect your lifestyle, taste, and the way you truly live in your home.",
            a:'Learn More'
        },
         {
            
            h2:"Renovation Management",
            p:"Creating personalized living environments that reflect your lifestyle, taste, and the way you truly live in your home.",
            a:'Learn More'
        },
        
    ]

    const portfolio =[
        {
            
            h2:"Best Residential Design",
            p:"ASID Design Excellence",
            a:'2025'
        },
         {
            
            h2:"Hospitality Design Award",
            p:"HD Awards",
            a:'2025'
        },
         {
            
            h2:"Best Residential Design",
            p:"ASID Design Excellence",
            a:'2025'
        },
         {
            
            h2:"Best Residential Design",
            p:"ASID Design Excellence",
            a:'2025'
        },
         {
            
           h2:"Best Residential Design",
            p:"ASID Design Excellence",
            a:'2025'
        },
         {
            
           h2:"Best Residential Design",
            p:"ASID Design Excellence",
            a:'2025'
        },
        
    ]

  return (
    <div>
        <Nav nav1="About" nav2="Portfolio" nav3="Services" nav4="Blog" nav5="Contact"   />
        <Home/>
        <About data={about} />
        <Portfolio data2={portfolio} />
        <Services/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default MainDay03
