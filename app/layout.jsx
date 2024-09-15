import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompt App",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="h-screen">
        <Provider>
          <Nav />
          <main className="flex justify-center items-center">{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
