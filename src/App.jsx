import { useState } from 'react'



function App() {
  const [color, setColor] = useState('black')

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
  
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("silver")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "silver" }}
          >
            Silver
          </button>
        </div>
      </div>

      {/* For mobile and tablet responsive styles */}
      <style>
        {`
  @media (max-width: 768px) {
    .fixed div {
      grid-template-columns: repeat(4, 1fr);
      display: grid;
      margin-left: auto;
      margin-right: auto;
      padding: 8px;
      width: calc(100% - 32px);
      box-sizing: border-box;
    }

    .fixed div button {
      width: 100%;
      text-align: center;
      overflow: hidden;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .fixed div {
      grid-template-columns: repeat(5, 1fr);
      display: grid;
      margin-left: auto;
      margin-right: auto;
      padding: 12px;
      width: calc(100% - 40px);
      box-sizing: border-box;
    }

    .fixed div button {
      width: 100%;
      text-align: center;
      overflow: hidden;
    }
  }
`}
      </style>
    </div>
  );
}

export default App
