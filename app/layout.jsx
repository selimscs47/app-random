export default  function RootLayout({ children}) {
  return (
    <html>
        <head/>
        <body>
        <header>Header</header>
        <footer>Footer</footer>
            {children}
        </body>
    </html>
  )
}

// import React from "react";
// import Home from "./page";


// const layout = () => {
//   return <Home />;
// };

// export default layout;
