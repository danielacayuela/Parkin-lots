import React, { useState } from "react";
import { Default } from "react-awesome-spinners";

function Loading() {
  const [loading, setLoading] = useState(true);

  return loading && <Default />;
}

export default Loading;
