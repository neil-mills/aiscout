import React, {
  createContext,
  useState,
  FC,
  SetStateAction,
  Dispatch,
} from 'react'

interface DefaultContext {
  showLightbox?: boolean
  noScroll?: boolean
  showMobileMenu?: boolean
}

interface ContextType extends DefaultContext {
  setSiteContext?: Dispatch<SetStateAction<DefaultContext>>
}

const defaultContext: ContextType = {
  showLightbox: false,
  noScroll: false,
  showMobileMenu: false,
}

const SiteContext = createContext<ContextType>(defaultContext)

export const SiteContextProvider: FC = ({ children }): JSX.Element => {
  const [siteContext, setSiteContext] = useState<ContextType>(defaultContext)
  return (
    <SiteContext.Provider value={{ ...siteContext, setSiteContext }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext
