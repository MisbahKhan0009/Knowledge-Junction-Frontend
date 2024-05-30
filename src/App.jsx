import { React, useState, useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes/Routes";
import Preloader from "./Pages/Loaders/Preloader/Preloader";
import { Toaster } from "sonner";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    const loadData = async () => {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      {" "}
      <Toaster richColors />
      {loading ? <Preloader /> : <RouterProvider router={router} />}
    </>
  );
  // return (
  //   <>
  //     <Toaster richColors />
  //     <RouterProvider router={router} />
  //   </>
  // );
}

export default App;
