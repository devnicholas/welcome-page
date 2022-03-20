import { useState } from "react";
import { Decoration } from "../services/Decoration";
import { Image } from "../services/Image";
import { Storage } from "../services/Storage";

export const Links = (props) => {
  const [links, setLinks] = useState(Storage.getLinks());
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const saveLink = () => {
    const newLink = {
      url: linkUrl,
      name: linkName,
    };
    setLinks([...links, newLink]);
    Storage.setLinks(links);
    setLinkName("");
    setLinkUrl("");
  };
  const removeItem = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
    Storage.setLinks(newLinks);
  };

  return (
    <div
      className="shadow bg-white fixed min-h-screen w-full sm:w-1/3 top-0 py-2 transition-all"
      style={props.style}
    >
      <div className="p-2 border-b border-gray-400 mb-4 flex justify-between">
        <h3 className="text-xl text-gray-700">Links úteis</h3>
        <div className="cursor-pointer" onClick={() => props.setShow(false)}>
          {Decoration.closeIcon()}
        </div>
      </div>
      <div
        className="px-2 flex flex-wrap justify-start items-start"
        style={{ height: "40vh" }}
      >
        {links.map((link, i) => (
          <div key={i} className="flex flex-col items-center mb-2 w-1/3 px-3">
            <div className="flex justify-center items-center bg-gray-200 py-1 text-center rounded w-full">
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <img
                  src={Image.getFavicon(link.url)}
                  alt={link.name}
                  className="m-auto h-8"
                />
                <span>{link.name}</span>
              </a>
            </div>
            <div className="text-center w-10/12 mt-1">
              <button
                className="bg-red-400 py-1 px-2 rounded w-full flex justify-center text-xs"
                onClick={removeItem.bind(this, i)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 border-b border-gray-400 mb-4 flex justify-between mt-4">
        <h3 className="text-xl text-gray-700">Adicionar Link</h3>
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
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
          />
        </div>
        <div className="mb-2 w-full">
          <label
            for="url"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Url
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="url"
            placeholder="Url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
        </div>
        <div className="mt-4 w-full">
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={saveLink}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
