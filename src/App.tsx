import Header from "./header/Header";
import Footer from "./footer/Footer";
import Chat from "./chat/Chat";

const App = () => {
  return (
    <div className="bg-gray-950 text-white h-screen w-screen flex flex-col justify-between font-commit">
      <Header />
      <Chat />
      <Footer />
    </div>
  );
};

export default App;
