import { useState } from "react";
import { Decoration } from "../services/Decoration";
import { Storage } from "../services/Storage";

export const Configuration = (props) => {
  const [userName, setUserName] = useState(Storage.getUser());
  const changeUserName = (e) => {
    setUserName(e.target.value);
  };

  const saveUser = () => {
    Storage.setUser(userName);
    props.setUser(userName);
    props.setShowConfig(false);
  };

  return (
    <div
      className="shadow bg-white fixed min-h-screen w-full sm:w-1/3 top-0 py-2 transition-all"
      style={props.configStyle}
    >
      <div className="p-2 border-b border-gray-400 mb-4 flex justify-between">
        <h3 className="text-xl text-gray-700">Configurações</h3>
        <div
          className="cursor-pointer"
          onClick={() => props.setShowConfig(false)}
        >
          {Decoration.closeIcon()}
        </div>
      </div>
      <div className="px-2 flex flex-col justify-start items-start">
        <div className="mb-2 w-full">
          <label
            for="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            placeholder="Nome"
            value={userName}
            onChange={changeUserName}
          />
        </div>
        <div className="mt-4 w-full">
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={saveUser}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
