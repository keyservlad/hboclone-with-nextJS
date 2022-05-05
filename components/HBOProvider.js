import React, {useContext, useState} from 'react'

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function HBOProvider({children}){
    const [user, setUser] = useState('')
    const defaultUserImg = 'https://randomuser.me/api/portraits/men/32.jpg'

    const createUserAction = (e) => {
        setUser(e.target.value)
        // console.log(user);
    }

    const [sideNavOpen, setSideNavOpenAction] = useState(false)
    const [accountModelOpen, setAccountModelOpenAction] = useState(false)

    return(
        <StateContext.Provider value={{
            user,
            createUserAction,
            defaultUserImg,
            sideNavOpen,
            setSideNavOpenAction,
            accountModelOpen,
            setAccountModelOpenAction,
        }}>
            {children}
        </StateContext.Provider>
    )
}