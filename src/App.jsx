import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Why from './components/Why'
import Hooks from './components/Hooks'
import User from './components/User'
import Surveyor from './components/Surveyor'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Cases from './components/Cases'
import Distribution from './components/Distribution'
import Invite from './components/Invite'
import SurveyBuilding from './components/SurveyBuilding'
import SharingThoughts from './components/SharingThoughts'
import DecentralizedAction from './components/DecentralizedAction'
import SDK from './components/SDK'
import Roadmap from './components/Roadmap'
import Tokonomics from './components/Tokonomics'

function App() {

  return (
    <div className='font-montserrat'>
      <div className='xl:max-w-[1300px] mx-auto '>
        <NavBar />
        <Intro />
        <div id='why' className='p-1'>
          <Why />
        </div>
        <Surveyor/>
        <div id='SurveyBuilding' className='p-1'>
        <SurveyBuilding/>
        </div>
        <div id='EarnToken' className='p-1'>
        <SharingThoughts />
        </div>
        <Hooks />
      </div>
      <div className='max-w-[1300px] mx-auto'>
      <div id='Distribution' className='p-1'>
        <Distribution />
      </div>
      <DecentralizedAction/>
      <SDK/>
      <Cases/>
      <Roadmap/>
      <Tokonomics/>
      </div>
      <div className=''>
        <div className='max-w-[1300px] mx-auto py-1'>
          <Faqs />
        </div>
      </div>
      <div className='bg-[#5831C8]'>
        <Invite/>
      </div>
      <div  >
        <div className='max-w-[1300px] mx-auto py-1'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
