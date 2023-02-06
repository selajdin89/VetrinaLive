import { Box, Center, Progress } from "native-base";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-native-paper";

const setLoading =
  (Component) =>
  ({ ...props }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

    if (loading) {
      return (
        <Center w="100%">
          <Box w="100%" maxW="400">
            <ProgressBar indeterminate progress={0.97} color="#21B8F9" />
          </Box>
        </Center>
      );
    }

    return (
      <Box component="div">
        <Component {...props} />
      </Box>
    );
  };

export default setLoading;
