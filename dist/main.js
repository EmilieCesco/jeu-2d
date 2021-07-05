/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let canvas = document.getElementById(\"myCanvas\");\nlet ctx = canvas.getContext(\"2d\");\n\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nctx.fillRect(0,0, canvas.width, canvas.height);\n\nconst image = new Image();\nimage.src = \"./src/img/background.jpg\";\n\nimage.onload = () => {\n\tctx.drawImage(image, 0, 0, canvas.width, canvas.height);\n\n\tctx.beginPath();\n\tctx.rect(canvas.width/2 - 50, 460, 100, 20);\n\tctx.fillStyle = \"red\";\n\tctx.fill();\n\tctx.closePath();\n}\n\n\n\n//# sourceURL=webpack://jeu-2d/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;