import '../src/styles/main.css'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import {useAnalytics} from "../services/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  const { init, trackPageViewed } = useAnalytics();
  const store = useStore(pageProps.initialReduxState)

  useEffect(() => {
    init("UA-175332649-1");
    trackPageViewed();
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}