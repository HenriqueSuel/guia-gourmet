import { useState } from "react";

const Forms = () => {
  const [input, setInput] = useState("henrique");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleInput");
    setInput(event.target.value);
  };

  const maskNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /\d+/gm;

    if (!regex.test(event.key)) {
      event.preventDefault();
    }
    console.log("maskNumber");

    console.log(event);
  };

  return (
    <form>
      <div className="p-3">
        <input
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-smblock w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          onKeyDown={(event) => maskNumber(event)}
          onChange={(event) => handleInput(event)}
          value={input}
          placeholder="digite apenas letras"
        />

        <h1>{input}</h1>
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default Forms;
