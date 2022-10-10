import '@/styles/global.css'
// import type { AppProps } from 'next/app'

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
import type { AppProps } from 'next/app'
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;