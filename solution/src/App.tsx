import { useState } from 'react'
import './App.css'
import { AnimatePresence, motion } from 'motion/react'
import starSvg from '../../assets/images/icon-star.svg'
import plusSvg from '../../assets/images/icon-plus.svg'
import minusSvg from '../../assets/images/icon-minus.svg'

import { HotKeys } from 'react-hotkeys'

const keyMap = {
  one: '1',
  two: '2',
  three: '3',
  four: '4'
}

const Toggleable = ({ text }) => {
  return (
    <motion.div className='mt-4 overflow-hidden text-sm text-[#8c6991]'
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}>
        <p>
            {text}
        </p>
    </motion.div>
  )
}

function App() {
  const [vis1, setVis1] = useState(0)
  const [vis2, setVis2] = useState(0)
  const [vis3, setVis3] = useState(0)
  const [vis4, setVis4] = useState(0)

  const handlers = {
    one: () => {
      setVis1(p => p == 0 ? 1 : 0)
    },
    two: () => {
      setVis2(p => p == 0 ? 1 : 0)
    },
    three: () => {
      setVis3(p => p == 0 ? 1 : 0)
    },
    four: () => {
      setVis4(p => p == 0 ? 1 : 0)
    }
  }

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <div className="w-full flex flex-col items-center justify-center h-[100vh] bg-[url('../../assets/images/background-pattern-mobile.svg')] md:bg-[url('../../assets/images/background-pattern-desktop.svg')] bg-contain bg-no-repeat bg-[#f9f0ff] font-['Work_Sans'] p-6 min-w-[375px]">
        <div className='bg-white flex flex-col p-6 gap-5 rounded-xl max-w-[510px] w-full'>
          <div className='flex flex-row items-center gap-5'>
            <img src={starSvg} alt="" className='w-6'/>
            <h1 className='text-3xl font-bold'>FAQs</h1>
          </div>

          <div className='pb-4 border-b-1 border-gray-200'>
            <div className='grid grid-cols-[1fr_auto] gap-4 items-start'>
              <div className='font-bold hover:text-[#b44be6] transition hover:cursor-pointer' onClick={() => setVis1(p => p == 0 ? 1 : 0)}>
                <p>What is Frontend Mentor, and how will it help me?</p>
              </div>
              <button className={`${vis1 == 1 ? "bg-[url('../../assets/images/icon-minus.svg')]" : "bg-[url('../../assets/images/icon-plus.svg')]"} w-8 h-8 bg-cover bg-no-repeat rounded-full p-0 focus:outline-1 hover:cursor-pointer transition flex-shrink-0`} onClick={() => setVis1(p => p == 0 ? 1 : 0)}></button>
            </div>
            <AnimatePresence>
              { vis1 == 1 && (
                <Toggleable text={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."} />
              )}
            </AnimatePresence>
          </div>

          <div className='pb-4 border-b-1 border-gray-200'>
            <div className='grid grid-cols-[1fr_auto] gap-4 items-start'>
              <div className='font-bold hover:text-[#b44be6] transition hover:cursor-pointer' onClick={() => setVis2(p => p == 0 ? 1 : 0)}>
                <p>Is Frontend Mentor free?</p>
              </div>
              <button className={`${vis2 == 1 ? "bg-[url('../../assets/images/icon-minus.svg')]" : "bg-[url('../../assets/images/icon-plus.svg')]"} w-8 h-8 bg-cover bg-no-repeat rounded-full p-0 focus:outline-1 hover:cursor-pointer transition flex-shrink-0`} onClick={() => setVis2(p => p == 0 ? 1 : 0)}></button>
            </div>
            <AnimatePresence>
              { vis2 == 1 && (
                <Toggleable text={"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."} />
              )}
            </AnimatePresence>
          </div>

          <div className='pb-4 border-b-1 border-gray-200'>
            <div className='grid grid-cols-[1fr_auto] gap-4 items-start'>
              <div className='font-bold hover:text-[#b44be6] transition hover:cursor-pointer' onClick={() => setVis3(p => p == 0 ? 1 : 0)}>
                <p>Can I use Frontend Mentor projects in my portfolio?</p>
              </div>
              <button className={`${vis3 == 1 ? "bg-[url('../../assets/images/icon-minus.svg')]" : "bg-[url('../../assets/images/icon-plus.svg')]"} w-8 h-8 bg-cover bg-no-repeat rounded-full p-0 focus:outline-1 hover:cursor-pointer transition flex-shrink-0`} onClick={() => setVis3(p => p == 0 ? 1 : 0)}></button>
            </div>
            <AnimatePresence>
              { vis3 == 1 && (
                <Toggleable text={"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"} />
              )}
            </AnimatePresence>
          </div>

          <div>
            <div className='grid grid-cols-[1fr_auto] gap-4 items-start'>
              <div className='font-bold hover:text-[#b44be6] transition hover:cursor-pointer' onClick={() => setVis4(p => p == 0 ? 1 : 0)}>
                <p>How can I get help if I'm stuck on a challenge?</p>
              </div>
              <button className={`${vis4 == 1 ? "bg-[url('../../assets/images/icon-minus.svg')]" : "bg-[url('../../assets/images/icon-plus.svg')]"} w-8 h-8 bg-cover bg-no-repeat rounded-full p-0 focus:outline-1 hover:cursor-pointer transition flex-shrink-0`} onClick={() => setVis4(p => p == 0 ? 1 : 0)}></button>
            </div>
            <AnimatePresence>
              { vis4 == 1 && (
                <Toggleable text={"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </HotKeys>
  )
}

export default App