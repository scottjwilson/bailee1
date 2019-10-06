import React from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebar] = React.useState(false)

  const handleOpenSidebar = () => {
    setSidebar(true)
  }
  const handleCloseSidebar = () => {
    setSidebar(false)
  }
  return (
    <AppContext.Provider
      value={{
        size,
        height,
        handleCloseSidebar,
        handleOpenSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
