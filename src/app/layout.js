import App from "../app";
import { Layout } from "../components/layout/Layout";

export const metadata = {
  title: "Vite + React",
  description: "description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root"><App><Layout>{children}</Layout></App></div>
      </body>
    </html>
  );
}
