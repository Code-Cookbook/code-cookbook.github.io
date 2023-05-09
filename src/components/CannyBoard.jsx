import React, { useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";

const BoardToken = "8a5fc697-9e21-60e7-b258-097027a23d00";

const CannyBoard = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    (function (w, d, i, s) {
      function l() {
        if (!d.getElementById(i)) {
          var f = d.getElementsByTagName(s)[0],
            e = d.createElement(s);
          (e.type = "text/javascript"),
            (e.async = !0),
            (e.src = "https://canny.io/sdk.js"),
            f.parentNode.insertBefore(e, f);
        }
      }
      if ("function" != typeof w.Canny) {
        var c = function () {
          c.q.push(arguments);
        };
        (c.q = []),
          (w.Canny = c),
          "complete" === d.readyState
            ? l()
            : w.attachEvent
            ? w.attachEvent("onload", l)
            : w.addEventListener("load", l, !1);
      }
    })(window, document, "canny-jssdk", "script");

    Canny("render", {
      boardToken: BoardToken,
      basePath: null, // See step 2
      ssoToken: null, // See step 3,
      theme: colorMode, // options: light [default], dark, auto
    });
  }, [colorMode]);

  return <div data-canny />;
};

export default CannyBoard;
