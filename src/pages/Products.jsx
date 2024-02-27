import Hero2 from '../portfolioComponents/Hero2.js'
import Navbar from '../portfolioComponents/Navbar.js'
import PricingCard from '../portfolioComponents/PricingCard.js'
import Work from '../portfolioComponents/WorkCard.js'





const Products = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Hero2 heading="PROJECTS." text="Some of my recent works."/>
      <PricingCard/>
      <Work/>
    </>
  )
}

export default Products