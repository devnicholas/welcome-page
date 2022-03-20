import { useEffect, useState } from "react";
import { Configuration } from "../components/Configuration";
import { Links } from "../components/Links";
import { SearchBox } from "../components/SearchBox";
import { Decoration } from "../services/Decoration";
import { Image } from "../services/Image";
import { Storage } from "../services/Storage";
import { Time } from "../services/Time";

export const Welcome = () => {
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState({});
  const [theme, setTheme] = useState("light");
  const [hour, setHour] = useState("00:00");
  const [salutation, setSalutation] = useState("");
  const [showConfig, setShowConfig] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [user, setUser] = useState(Storage.getUser());

  useEffect(() => {
    const fetchImage = async () => {
      const data = await Image.getImage();
      setImage(data.imageUrl);
      setAuthor(data.author);
      setTheme(Decoration.getTheme(data.imageColor));
    };
    fetchImage();
    setSalutation(Time.getSalutation());
    const interval = setInterval(() => {
      setHour(Time.getHour());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const styled = {
    background: `url(${image}) no-repeat center`,
    color: theme === "dark" ? "#fff" : "#000",
  };
  const configStyle = {
    right: showConfig ? "0px" : "-100%",
  };
  const linksStyle = {
    left: showLinks ? "0px" : "-100%",
  };

  return (
    <main
      className="flex flex-col min-h-screen w-screen justify-between items-center overflow-hidden"
      style={styled}
    >
      <header className="px-2 py-3 flex justify-between w-full">
        <div
          className="hover:bg-black hover:bg-opacity-50 icon-config"
          onClick={() => setShowLinks(true)}
        >
          {Decoration.linkIcon(theme)}
        </div>
        <div
          className="hover:bg-black hover:bg-opacity-50 icon-config"
          onClick={() => setShowConfig(true)}
        >
          {Decoration.configIcon(theme)}
        </div>
      </header>
      <div className="flex flex-col justify-center text-center">
        <h3 className="text-7xl mb-2">{hour}</h3>
        <h4 className="text-xl mb-6">
          {Time.getWeekDay()}, {Time.getDate()}
        </h4>
        <h1 className="font-semibold sm:text-4xl text-5xl">
          {salutation}, {user}!
        </h1>
        <SearchBox />
      </div>
      <footer className="flex justify-start p-2 w-full">
        <div className="p-1">
          <a href={author.profile} target="_blank" rel="noreferrer">
            Foto:
            <span className="underline">{author.name}</span>
          </a>
        </div>
      </footer>
      <Configuration configStyle={configStyle} setShowConfig={setShowConfig} setUser={setUser} />
      <Links style={linksStyle} setShow={setShowLinks} />
    </main>
  );
};
