import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import { Providers } from "./providers";
import Content from "./Content";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Providers>
        <Navbar />
        <Content />
        {children}
      </Providers>
    </>
  );
};
export default Layout;
