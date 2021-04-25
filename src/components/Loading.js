import React from "react";
import { useLoading, Bars } from "@agney/react-loading";
const Loading = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width={200} />,
    loaderProps: {
      style: {
        color: "gold",
      },
    },
  });
  return (
    <div className="loading" {...containerProps}>
      {/* <div className="pre"> */}
      {indicatorEl}
      {/* </div> */}
    </div>
  );
};

export default Loading;
