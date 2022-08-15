import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";
const environmentID =  "<YOUR_ENVIRONMENT_KEY>"
function MyApp({ Component, pageProps, flagsmithState }) {

  return (
    <FlagsmithProvider
      options={{
        state:flagsmithState, // passes the initial SSR flagsmith state to prevent flickering
        environmentID,
      }}
      flagsmith={flagsmith}
    >
      <Component {...pageProps} />
    </FlagsmithProvider>
  );
}


MyApp.getInitialProps = async () => {
    await flagsmith.init({ // fetches flags on the server
        environmentID,
    });
    return { flagsmithState: flagsmith.getState() }
}


export default MyApp;
