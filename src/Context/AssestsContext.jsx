import { createContext, useContext } from 'react'

import ArisuAvatar from '../Images/Arisu.png'
import ArisuThinking from "../Images/Thinking.png"
import ArisuCalling from "../Images/Calling.png"
import ArisuLaptop from "../Images/OnLaptop.png"
import ArisuThumbsup from "../Images/Thumbup.png"


// Create context
const AssetsContext = createContext(null)

// Provider component
export const AssetsProvider = ({ children }) => {
  const assets = {
    images:{
        Avatar: ArisuAvatar,
        Thinking:ArisuThinking,
        Calling:ArisuCalling,
        Laptop:ArisuLaptop,
        Thumbsup:ArisuThumbsup
    },
    links: {
      github: '/assets/icons/github.svg',
      linkedin: '/assets/icons/linkedin.svg',
      twitter: '/assets/icons/twitter.svg',
    },
    // resume: {
    //   pdf: '/assets/resume/Shaik_Arshad_Resume.pdf',
    // },
    links: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://www.linkedin.com/in/shaik-arshad-a4b963378/',
      email: 'shaik.arshad.work123@gmail.com',
    },
  }

  return (
    <AssetsContext.Provider value={assets}>
      {children}
    </AssetsContext.Provider>
  )
}

// Custom hook (cleaner usage)
export const useAssets = () => {
  const context = useContext(AssetsContext)
  if (!context) {
    throw new Error('useAssets must be used within an AssetsProvider')
  }
  return context
}
