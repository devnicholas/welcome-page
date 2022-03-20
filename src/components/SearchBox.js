import { useEffect } from "react";

export const SearchBox = () => {
  useEffect(() => {
    (function () {
      var cx = "866f44c590c154a01";
      var gcse = document.createElement("script");
      gcse.type = "text/javascript";
      gcse.async = true;
      gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  }, []);
  return (
    <div className="mt-4 text-black search-box px-4 sm:px-0">
      <div
        className="gcse-searchbox-only"
        data-resultsUrl="https://www.google.com/search"
        data-newWindow="true"
        data-queryParameterName="q"
        data-autoCompleteMaxCompletions="5"
      ></div>
    </div>
  );
};
