import { Provider } from 'react-redux'
import { store } from '../../../../redux/store'
import { UserContextProvider } from '../../../../components/user-context/userContext'
import { ThemeContextProvider } from '../../../../components/theme-context/themeContext'
export default function Reviewspage({children}) {
  return (
    <Provider store={store}>
    <UserContextProvider>
    <ThemeContextProvider>{children}</ThemeContextProvider>
    </UserContextProvider></Provider>
  )
}
