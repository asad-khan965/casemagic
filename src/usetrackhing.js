// usePageTracking.js
import { useHistory } from "react-router-dom";
import TagManager from "react-gtm-module";

const usePageTracking = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location) => {
      TagManager.dataLayer({
        dataLayer: {
          event: "pageview",
          page: location.pathname + location.search,
        },
      });
    });
    // Trigger the first pageview manually
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: window.location.pathname + window.location.search,
      },
    });
    return () => {
      unlisten();
    };
  }, [history]);
};
export default usePageTracking;