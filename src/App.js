import Form from "./Components/Form";
import Bmi from "./Components/Bmi";

function App() {
  return (
    <div className="bg-zinc-100 w-screen h-screen flex justify-center items-center flex-col">
      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-violet-600 from-rose-400">
            Boy/Kilo Endeks Hesaplayıcı
          </span>
        </h1>
      </div>
      <div className="flex">
        <div className="w-96 mr-16">
          <Form />
        </div>
        <div>
          <Bmi />
        </div>
      </div>
    </div>
  );
}

export default App;
