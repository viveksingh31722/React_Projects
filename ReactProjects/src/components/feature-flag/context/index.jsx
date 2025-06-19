import { createContext, useState, useEffect } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      //Original service call
      const res = await featureFlagsDataServiceCall();
      setEnabledFlags(res);
      setLoading(false);
      // const data = await res.json();
    } catch (e) {
      console.log(e);
      setLoading(false);
      throw new Error(e);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
