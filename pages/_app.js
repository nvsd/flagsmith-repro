import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";

function MyApp({ Component, pageProps }) {
  return (
    <FlagsmithProvider
      options={{
        environmentID: "<YOUR_ENVIRONMENT_KEY>",
      }}
      flagsmith={flagsmith}
    >
      <Component {...pageProps} />
    </FlagsmithProvider>
  );
}

export default MyApp;
