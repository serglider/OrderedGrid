(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["orderedGrid"] = factory();
	else
		root["orderedGrid"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cellOrder.js":
/*!**************************!*\
  !*** ./src/cellOrder.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCellOrder; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getCellOrder(data, col, row, index, mode) {
  var vertHalf = data.vertHalf,
      horHalf = data.horHalf,
      centerCells = data.centerCells,
      snakeIndexes = data.snakeIndexes,
      spiralIndexes = data.spiralIndexes;

  var _centerCells = _slicedToArray(centerCells, 2),
      vert = _centerCells[0],
      hor = _centerCells[1];

  var dvert, dhor;

  switch (mode) {
    case 0:
      return index;

    case 1:
      return col;
    // columns

    case 2:
      return row;
    // rows

    case 3:
      return col % 2;
    // stripes vert.

    case 4:
      return row % 2;
    // stripes hor.

    case 5:
      // checkerboard
      if (row % 2) {
        return col % 2 ? col % 2 - 1 : col % 2 + 1;
      }

      return col % 2;

    case 6:
      return Math.floor(Math.abs(vertHalf - row));
    // from center to top/bottom

    case 7:
      return Math.floor(Math.abs(horHalf - col));
    // from center to left/right

    case 8:
      // from center
      dvert = Math.min(Math.abs(vert[0] - row), Math.abs(vert[1] - row));
      dhor = Math.min(Math.abs(hor[0] - col), Math.abs(hor[1] - col));
      return Math.max(dvert, dhor);

    case 9:
      return snakeIndexes[index];
    // snake

    case 10:
      return spiralIndexes.indexOf(index);
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: createOrderedGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrderedGrid", function() { return createOrderedGrid; });
/* harmony import */ var _cellOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cellOrder */ "./src/cellOrder.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function createOrderedGrid(dimensions) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var sizeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var fullWidth = sizeData.fullWidth,
      fullHeight = sizeData.fullHeight,
      unitWidth = sizeData.unitWidth,
      unitHeight = sizeData.unitHeight,
      _sizeData$initX = sizeData.initX,
      initX = _sizeData$initX === void 0 ? 0 : _sizeData$initX,
      _sizeData$initY = sizeData.initY,
      initY = _sizeData$initY === void 0 ? 0 : _sizeData$initY,
      _sizeData$gap = sizeData.gap,
      gap = _sizeData$gap === void 0 ? 0 : _sizeData$gap;
  var isFull = fullWidth && fullHeight;
  var isUnit = unitWidth && unitHeight;
  checkParametersValidity(dimensions);

  var _dimensions = _slicedToArray(dimensions, 2),
      columns = _dimensions[0],
      rows = _dimensions[1];

  var data = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(columns, rows, mode);
  var boundGetOrder = _cellOrder__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, data);
  var w, h;

  if (isFull) {
    h = Math.ceil((fullHeight - rows * gap + gap) / rows);
    w = Math.ceil((fullWidth - columns * gap + gap) / columns);
  } else if (isUnit) {
    h = unitHeight;
    w = unitWidth;
  }

  return Array.from(Array(columns * rows), getCell);

  function getCell(_, index) {
    var column = index % columns;
    var row = Math.floor(index / columns);
    var order = boundGetOrder(column, row, index, mode);
    var cell = {
      column: column,
      row: row,
      order: order,
      index: index
    };

    if (isFull || isUnit) {
      var x = initX + column * (w + gap);
      var y = initY + row * (h + gap);
      Object.assign(cell, {
        x: x,
        y: y,
        w: w,
        h: h
      });
    }

    return cell;
  }
}

function checkParametersValidity(dims) {
  var isValidArray = Array.isArray(dims) && dims.length === 2 && +dims[0] && +dims[1];

  if (!isValidArray) {
    throw new Error('The dimensions argument has to be an array containing two numbers greater than zero');
  }
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getGridData; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getGridData(columns, rows, mode) {
  var vertHalf = (rows - 1) / 2;
  var horHalf = (columns - 1) / 2;
  var data = {
    vertHalf: vertHalf,
    horHalf: horHalf,
    centerCells: [],
    snakeIndexes: [],
    spiralIndexes: []
  };

  switch (mode) {
    case 8:
      if (columns % 2) {
        if (rows % 2) {
          data.centerCells = [[vertHalf, vertHalf], [horHalf, horHalf]];
        } else {
          data.centerCells = [[Math.floor(vertHalf), Math.ceil(vertHalf)], [horHalf, horHalf]];
        }
      } else {
        if (rows % 2) {
          data.centerCells = [[vertHalf, vertHalf], [Math.floor(horHalf), Math.ceil(horHalf)]];
        } else {
          data.centerCells = [[Math.floor(vertHalf), Math.ceil(vertHalf)], [Math.floor(horHalf), Math.ceil(horHalf)]];
        }
      }

      break;

    case 9:
      data.snakeIndexes = getSnakeOrder(columns, rows);
      break;

    case 10:
      data.spiralIndexes = getSpiralOrder(columns, rows);
      break;
  }

  return data;
}

function spiral(matrix, columns, rows) {
  var row,
      index = 0;
  var result = new Array(columns * rows);

  while (matrix.length) {
    row = matrix.shift();

    while (row.length) {
      result[index++] = row.shift();
    }

    matrix = transpose(matrix);
  }

  return result;
}

function transpose(matrix) {
  var column = matrix[0];
  if (!column) return matrix;
  var columns = column.length;
  var rows = matrix.length;
  var result = new Array(columns);
  var columnIndex;
  var resultColumnIndex;
  var rowIndex;

  for (resultColumnIndex = 0, columnIndex = columns - 1; columnIndex >= 0; columnIndex--, resultColumnIndex++) {
    result[resultColumnIndex] = new Array(rows);

    for (rowIndex = 0; rowIndex < rows; rowIndex++) {
      result[resultColumnIndex][rowIndex] = matrix[rowIndex][columnIndex];
    }
  }

  return result;
}

function chunk(array, size) {
  var length = array == null ? 0 : array.length;

  if (!length || size < 1) {
    return [];
  }

  var index = 0,
      resIndex = 0,
      result = Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, index += size);
  }

  return result;
}

function getSnakeOrder(columns, rows) {
  var base = Array.from(Array(columns * rows), function (_, i) {
    return i;
  });
  var matrix = chunk(base, columns);
  var bbf = matrix.map(function (arr, i) {
    return i % 2 ? arr.reverse() : arr;
  });
  return bbf.reduce(function (result, arr) {
    return [].concat(_toConsumableArray(result), _toConsumableArray(arr));
  }, []);
}

function getSpiralOrder(columns, rows) {
  var base = Array.from(Array(columns * rows), function (_, i) {
    return i;
  });
  var matrix = chunk(base, columns);
  return spiral(matrix, columns, rows);
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmRlcmVkR3JpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb3JkZXJlZEdyaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3JkZXJlZEdyaWQvLi9zcmMvY2VsbE9yZGVyLmpzIiwid2VicGFjazovL29yZGVyZWRHcmlkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29yZGVyZWRHcmlkLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldENlbGxPcmRlciIsImRhdGEiLCJjb2wiLCJyb3ciLCJpbmRleCIsIm1vZGUiLCJ2ZXJ0SGFsZiIsImhvckhhbGYiLCJjZW50ZXJDZWxscyIsInNuYWtlSW5kZXhlcyIsInNwaXJhbEluZGV4ZXMiLCJ2ZXJ0IiwiaG9yIiwiZHZlcnQiLCJkaG9yIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibWluIiwibWF4IiwiaW5kZXhPZiIsImNyZWF0ZU9yZGVyZWRHcmlkIiwiZGltZW5zaW9ucyIsInNpemVEYXRhIiwiZnVsbFdpZHRoIiwiZnVsbEhlaWdodCIsInVuaXRXaWR0aCIsInVuaXRIZWlnaHQiLCJpbml0WCIsImluaXRZIiwiZ2FwIiwiaXNGdWxsIiwiaXNVbml0IiwiY2hlY2tQYXJhbWV0ZXJzVmFsaWRpdHkiLCJjb2x1bW5zIiwicm93cyIsImdldEdyaWREYXRhIiwiYm91bmRHZXRPcmRlciIsImJpbmQiLCJ3IiwiaCIsImNlaWwiLCJBcnJheSIsImZyb20iLCJnZXRDZWxsIiwiXyIsImNvbHVtbiIsIm9yZGVyIiwiY2VsbCIsIngiLCJ5IiwiT2JqZWN0IiwiYXNzaWduIiwiZGltcyIsImlzVmFsaWRBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsImdldFNuYWtlT3JkZXIiLCJnZXRTcGlyYWxPcmRlciIsInNwaXJhbCIsIm1hdHJpeCIsInJlc3VsdCIsInNoaWZ0IiwidHJhbnNwb3NlIiwiY29sdW1uSW5kZXgiLCJyZXN1bHRDb2x1bW5JbmRleCIsInJvd0luZGV4IiwiY2h1bmsiLCJhcnJheSIsInNpemUiLCJyZXNJbmRleCIsInNsaWNlIiwiYmFzZSIsImkiLCJiYmYiLCJtYXAiLCJhcnIiLCJyZXZlcnNlIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmUsU0FBU0EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFzQ0MsS0FBdEMsRUFBNkNDLElBQTdDLEVBQW1EO0FBQUEsTUFFdkRDLFFBRnVELEdBRVFMLElBRlIsQ0FFdkRLLFFBRnVEO0FBQUEsTUFFN0NDLE9BRjZDLEdBRVFOLElBRlIsQ0FFN0NNLE9BRjZDO0FBQUEsTUFFcENDLFdBRm9DLEdBRVFQLElBRlIsQ0FFcENPLFdBRm9D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LE1BQU1iLE1BQU0sR0FBR08sS0FBSyxDQUFDSyxJQUFELEVBQU92QyxPQUFQLENBQXBCO0FBQ0EsU0FBTzBCLE1BQU0sQ0FBQ0MsTUFBRCxFQUFTM0IsT0FBVCxFQUFrQkMsSUFBbEIsQ0FBYjtBQUNILEMiLCJmaWxlIjoib3JkZXJlZC1ncmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wib3JkZXJlZEdyaWRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3JkZXJlZEdyaWRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2VsbE9yZGVyKGRhdGEsIGNvbCwgcm93LCBpbmRleCwgbW9kZSkge1xyXG5cclxuICAgIGNvbnN0IHt2ZXJ0SGFsZiwgaG9ySGFsZiwgY2VudGVyQ2VsbHMsIHNuYWtlSW5kZXhlcywgc3BpcmFsSW5kZXhlc30gPSBkYXRhO1xyXG4gICAgY29uc3QgW3ZlcnQsIGhvcl0gPSBjZW50ZXJDZWxscztcclxuICAgIGxldCBkdmVydCwgZGhvcjtcclxuXHJcbiAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2w7IC8vIGNvbHVtbnNcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHJldHVybiByb3c7IC8vIHJvd3NcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2wgJSAyOyAvLyBzdHJpcGVzIHZlcnQuXHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICByZXR1cm4gcm93ICUgMjsgLy8gc3RyaXBlcyBob3IuXHJcbiAgICAgICAgY2FzZSA1OiAvLyBjaGVja2VyYm9hcmRcclxuICAgICAgICAgICAgaWYgKHJvdyAlIDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2wgJSAyID8gY29sICUgMiAtIDEgOiBjb2wgJSAyICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29sICUgMjtcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGguYWJzKHZlcnRIYWxmIC0gcm93KSk7IC8vIGZyb20gY2VudGVyIHRvIHRvcC9ib3R0b21cclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGguYWJzKGhvckhhbGYgLSBjb2wpKTsgLy8gZnJvbSBjZW50ZXIgdG8gbGVmdC9yaWdodFxyXG4gICAgICAgIGNhc2UgODogLy8gZnJvbSBjZW50ZXJcclxuICAgICAgICAgICAgZHZlcnQgPSBNYXRoLm1pbihNYXRoLmFicyh2ZXJ0WzBdIC0gcm93KSwgTWF0aC5hYnModmVydFsxXSAtIHJvdykpO1xyXG4gICAgICAgICAgICBkaG9yID0gTWF0aC5taW4oTWF0aC5hYnMoaG9yWzBdIC0gY29sKSwgTWF0aC5hYnMoaG9yWzFdIC0gY29sKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChkdmVydCwgZGhvcik7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICByZXR1cm4gc25ha2VJbmRleGVzW2luZGV4XTsgLy8gc25ha2VcclxuICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICByZXR1cm4gc3BpcmFsSW5kZXhlcy5pbmRleE9mKGluZGV4KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgZ2V0Q2VsbE9yZGVyIGZyb20gJy4vY2VsbE9yZGVyJztcclxuaW1wb3J0IGdldEdyaWREYXRhIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9yZGVyZWRHcmlkKGRpbWVuc2lvbnMsIG1vZGUgPSAwLCBzaXplRGF0YSA9IHt9KSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGZ1bGxXaWR0aCxcclxuICAgICAgICBmdWxsSGVpZ2h0LFxyXG4gICAgICAgIHVuaXRXaWR0aCxcclxuICAgICAgICB1bml0SGVpZ2h0LFxyXG4gICAgICAgIGluaXRYID0gMCxcclxuICAgICAgICBpbml0WSA9IDAsXHJcbiAgICAgICAgZ2FwID0gMFxyXG4gICAgfSA9IHNpemVEYXRhO1xyXG4gICAgY29uc3QgaXNGdWxsID0gZnVsbFdpZHRoICYmIGZ1bGxIZWlnaHQ7XHJcbiAgICBjb25zdCBpc1VuaXQgPSB1bml0V2lkdGggJiYgdW5pdEhlaWdodDtcclxuICAgIGNoZWNrUGFyYW1ldGVyc1ZhbGlkaXR5KGRpbWVuc2lvbnMpO1xyXG5cclxuICAgIGNvbnN0IFtjb2x1bW5zLCByb3dzXSA9IGRpbWVuc2lvbnM7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0R3JpZERhdGEoY29sdW1ucywgcm93cywgbW9kZSk7XHJcbiAgICBjb25zdCBib3VuZEdldE9yZGVyID0gZ2V0Q2VsbE9yZGVyLmJpbmQobnVsbCwgZGF0YSk7XHJcblxyXG4gICAgbGV0IHcsIGg7XHJcbiAgICBpZiAoaXNGdWxsKSB7XHJcbiAgICAgICAgaCA9IE1hdGguY2VpbCgoZnVsbEhlaWdodCAtIHJvd3MgKiBnYXAgKyBnYXApIC8gcm93cyk7XHJcbiAgICAgICAgdyA9IE1hdGguY2VpbCgoZnVsbFdpZHRoIC0gY29sdW1ucyAqIGdhcCArIGdhcCkgLyBjb2x1bW5zKTtcclxuICAgIH0gZWxzZSBpZiAoaXNVbml0KSB7XHJcbiAgICAgICAgaCA9IHVuaXRIZWlnaHQ7XHJcbiAgICAgICAgdyA9IHVuaXRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShjb2x1bW5zICogcm93cyksIGdldENlbGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENlbGwoXywgaW5kZXgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29sdW1uID0gaW5kZXggJSBjb2x1bW5zO1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyBjb2x1bW5zKTtcclxuICAgICAgICBjb25zdCBvcmRlciA9IGJvdW5kR2V0T3JkZXIoY29sdW1uLCByb3csIGluZGV4LCBtb2RlKTtcclxuICAgICAgICBjb25zdCBjZWxsID0ge2NvbHVtbiwgcm93LCBvcmRlciwgaW5kZXh9O1xyXG5cclxuICAgICAgICBpZiAoaXNGdWxsIHx8IGlzVW5pdCkge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gaW5pdFggKyBjb2x1bW4gKiAodyArIGdhcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBpbml0WSArIHJvdyAqIChoICsgZ2FwKTtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjZWxsLCB7eCwgeSwgdywgaH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNlbGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUGFyYW1ldGVyc1ZhbGlkaXR5KGRpbXMpIHtcclxuXHJcbiAgICBjb25zdCBpc1ZhbGlkQXJyYXkgPSBBcnJheS5pc0FycmF5KGRpbXMpICYmIGRpbXMubGVuZ3RoID09PSAyICYmICtkaW1zWzBdICYmICtkaW1zWzFdO1xyXG5cclxuICAgIGlmICghaXNWYWxpZEFycmF5KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGltZW5zaW9ucyBhcmd1bWVudCBoYXMgdG8gYmUgYW4gYXJyYXkgY29udGFpbmluZyB0d28gbnVtYmVycyBncmVhdGVyIHRoYW4gemVybycpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdyaWREYXRhKGNvbHVtbnMsIHJvd3MsIG1vZGUpIHtcclxuXHJcbiAgICBjb25zdCB2ZXJ0SGFsZiA9IChyb3dzIC0gMSkgLyAyO1xyXG4gICAgY29uc3QgaG9ySGFsZiA9IChjb2x1bW5zIC0gMSkgLyAyO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgdmVydEhhbGYsXHJcbiAgICAgICAgaG9ySGFsZixcclxuICAgICAgICBjZW50ZXJDZWxsczogW10sXHJcbiAgICAgICAgc25ha2VJbmRleGVzOiBbXSxcclxuICAgICAgICBzcGlyYWxJbmRleGVzOiBbXSxcclxuICAgIH07XHJcblxyXG4gICAgc3dpdGNoIChtb2RlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgaWYgKGNvbHVtbnMgJSAyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93cyAlIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNlbnRlckNlbGxzID0gW1t2ZXJ0SGFsZiwgdmVydEhhbGZdLCBbaG9ySGFsZiwgaG9ySGFsZl1dO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNlbnRlckNlbGxzID0gW1tNYXRoLmZsb29yKHZlcnRIYWxmKSwgTWF0aC5jZWlsKHZlcnRIYWxmKV0sIFtob3JIYWxmLCBob3JIYWxmXV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93cyAlIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNlbnRlckNlbGxzID0gW1t2ZXJ0SGFsZiwgdmVydEhhbGZdLCBbTWF0aC5mbG9vcihob3JIYWxmKSwgTWF0aC5jZWlsKGhvckhhbGYpXV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY2VudGVyQ2VsbHMgPSBbW01hdGguZmxvb3IodmVydEhhbGYpLCBNYXRoLmNlaWwodmVydEhhbGYpXSwgW01hdGguZmxvb3IoaG9ySGFsZiksIE1hdGguY2VpbChob3JIYWxmKV1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgIGRhdGEuc25ha2VJbmRleGVzID0gZ2V0U25ha2VPcmRlcihjb2x1bW5zLCByb3dzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgIGRhdGEuc3BpcmFsSW5kZXhlcyA9IGdldFNwaXJhbE9yZGVyKGNvbHVtbnMsIHJvd3MpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BpcmFsKG1hdHJpeCwgY29sdW1ucywgcm93cykge1xyXG4gICAgbGV0IHJvdywgaW5kZXggPSAwO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5KGNvbHVtbnMgKiByb3dzKTtcclxuXHJcbiAgICB3aGlsZSAobWF0cml4Lmxlbmd0aCkge1xyXG4gICAgICAgIHJvdyA9IG1hdHJpeC5zaGlmdCgpO1xyXG4gICAgICAgIHdoaWxlIChyb3cubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleCsrXSA9IHJvdy5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXRyaXggPSB0cmFuc3Bvc2UobWF0cml4KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zcG9zZShtYXRyaXgpIHtcclxuICAgIGNvbnN0IGNvbHVtbiA9IG1hdHJpeFswXTtcclxuICAgIGlmICghY29sdW1uKSByZXR1cm4gbWF0cml4O1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGNvbHVtbi5sZW5ndGg7XHJcbiAgICBjb25zdCByb3dzID0gbWF0cml4Lmxlbmd0aDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheShjb2x1bW5zKTtcclxuICAgIGxldCBjb2x1bW5JbmRleDtcclxuICAgIGxldCByZXN1bHRDb2x1bW5JbmRleDtcclxuICAgIGxldCByb3dJbmRleDtcclxuICAgIGZvciAocmVzdWx0Q29sdW1uSW5kZXggPSAwLCBjb2x1bW5JbmRleCA9IGNvbHVtbnMgLSAxOyBjb2x1bW5JbmRleCA+PSAwOyBjb2x1bW5JbmRleC0tLCByZXN1bHRDb2x1bW5JbmRleCsrKSB7XHJcbiAgICAgICAgcmVzdWx0W3Jlc3VsdENvbHVtbkluZGV4XSA9IG5ldyBBcnJheShyb3dzKTtcclxuICAgICAgICBmb3IgKHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCByb3dzOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtyZXN1bHRDb2x1bW5JbmRleF1bcm93SW5kZXhdID0gbWF0cml4W3Jvd0luZGV4XVtjb2x1bW5JbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2h1bmsoYXJyYXksIHNpemUpIHtcclxuXHJcbiAgICBjb25zdCBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcclxuICAgIGlmICghbGVuZ3RoIHx8IHNpemUgPCAxKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgbGV0IGluZGV4ID0gMCxcclxuICAgICAgICByZXNJbmRleCA9IDAsXHJcbiAgICAgICAgcmVzdWx0ID0gQXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIHNpemUpKTtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSBhcnJheS5zbGljZShpbmRleCwgKGluZGV4ICs9IHNpemUpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNuYWtlT3JkZXIoY29sdW1ucywgcm93cykge1xyXG4gICAgY29uc3QgYmFzZSA9IEFycmF5LmZyb20oQXJyYXkoY29sdW1ucyAqIHJvd3MpLCAoXywgaSkgPT4gaSk7XHJcbiAgICBjb25zdCBtYXRyaXggPSBjaHVuayhiYXNlLCBjb2x1bW5zKTtcclxuICAgIGNvbnN0IGJiZiA9IG1hdHJpeC5tYXAoKGFyciwgaSkgPT4gaSAlIDIgPyBhcnIucmV2ZXJzZSgpIDogYXJyKTtcclxuICAgIHJldHVybiBiYmYucmVkdWNlKChyZXN1bHQsIGFycikgPT4gWy4uLnJlc3VsdCwgLi4uYXJyXSwgW10pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNwaXJhbE9yZGVyKGNvbHVtbnMsIHJvd3MpIHtcclxuICAgIGNvbnN0IGJhc2UgPSBBcnJheS5mcm9tKEFycmF5KGNvbHVtbnMgKiByb3dzKSwgKF8sIGkpID0+IGkpO1xyXG4gICAgY29uc3QgbWF0cml4ID0gY2h1bmsoYmFzZSwgY29sdW1ucyk7XHJcbiAgICByZXR1cm4gc3BpcmFsKG1hdHJpeCwgY29sdW1ucywgcm93cyk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9