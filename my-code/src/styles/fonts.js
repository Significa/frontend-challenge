// @flow
import { css } from "styled-components"

export default css`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/roboto-v18-latin-regular.eot"); /* IE9 Compat Modes */
    src: local("Roboto"), local("Roboto-Regular"),
      url("../fonts/roboto-v18-latin-regular.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("../fonts/roboto-v18-latin-regular.woff2")
        format("woff2"),
      /* Super Modern Browsers */ url("../fonts/roboto-v18-latin-regular.woff")
        format("woff"),
      /* Modern Browsers */ url("../fonts/roboto-v18-latin-regular.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("../fonts/roboto-v18-latin-regular.svg#Roboto") format("svg"); /* Legacy iOS */
  }

  /* roboto-700 - latin */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url("../fonts/roboto-v18-latin-700.eot"); /* IE9 Compat Modes */
    src: local("Roboto Bold"), local("Roboto-Bold"),
      url("../fonts/roboto-v18-latin-700.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("../fonts/roboto-v18-latin-700.woff2") format("woff2"),
      /* Super Modern Browsers */ url("../fonts/roboto-v18-latin-700.woff")
        format("woff"),
      /* Modern Browsers */ url("../fonts/roboto-v18-latin-700.ttf")
        format("truetype"),
      /* Safari, Android, iOS */ url("../fonts/roboto-v18-latin-700.svg#Roboto")
        format("svg"); /* Legacy iOS */
  }

  /* roboto-900 - latin */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    src: url("../fonts/roboto-v18-latin-900.eot"); /* IE9 Compat Modes */
    src: local("Roboto Black"), local("Roboto-Black"),
      url("../fonts/roboto-v18-latin-900.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("../fonts/roboto-v18-latin-900.woff2") format("woff2"),
      /* Super Modern Browsers */ url("../fonts/roboto-v18-latin-900.woff")
        format("woff"),
      /* Modern Browsers */ url("../fonts/roboto-v18-latin-900.ttf")
        format("truetype"),
      /* Safari, Android, iOS */ url("../fonts/roboto-v18-latin-900.svg#Roboto")
        format("svg"); /* Legacy iOS */
  }
`
