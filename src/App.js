import React from "react";
import { Outlet } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";

function App() {

  return (
    <ChakraProvider toastOptions={{ defaultOptions: { position: "top" } }}>
      <div className="App">
        <Header />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </ChakraProvider>
  );
}

export default App;
