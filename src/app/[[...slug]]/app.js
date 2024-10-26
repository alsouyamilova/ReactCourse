import dynamic from "next/dynamic";

const AppComponent = dynamic(() => import("../../app")) //, { ssr: false });

export const App = () => {
  return <AppComponent />;
};
