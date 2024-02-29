import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
import Hello from "./assets/Hello";

function App() {

  const helloData = [
    {name: "Bob", message: "Hi there"},
    {name: "Tom", message: "Hello..."}
  ];

  return (
    <div className="App">
      <Counter/>
      {helloData.map((data, index) => {
        <Hello key={index} name={data.name} message={data.message} />
      })}

      <Contact phone="062-257-4383" email="kittigan@email.com"/>
    </div>
  )
}

export default App