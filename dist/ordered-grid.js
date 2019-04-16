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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function createOrderedGrid(dimensions) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var transpose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var sizeData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
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
  checkArgumentssValidity(dimensions);

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

  var ordered = Array.from(Array(columns * rows), getCell);

  if (transpose) {
    var orders = ordered.map(function (cell) {
      return cell.order;
    });
    var transpOrders = transposeGrid(orders, columns, transpose);
    transpOrders.forEach(function (order, i) {
      ordered[i].order = order;
    });
  }

  return ordered;

  function getCell(_, index) {
    var column = index % columns;
    var row = Math.floor(index / columns);
    var order = boundGetOrder(column, row, index, mode); // let column, row;
    // if (transpose) {
    //     column = _row;
    //     row = _column;
    // } else {
    //     column = _column;
    //     row = _row;
    // }

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

function transposeGrid(grid, columns, times) {
  var matrix = chunk(grid, columns);
  console.log(matrix);

  while (times) {
    times--;
    matrix = transpose(matrix);
  }

  return matrix.reduce(function (result, arr) {
    return [].concat(_toConsumableArray(result), _toConsumableArray(arr));
  }, []);
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

function checkArgumentssValidity(dims) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmRlcmVkR3JpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb3JkZXJlZEdyaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3JkZXJlZEdyaWQvLi9zcmMvY2VsbE9yZGVyLmpzIiwid2VicGFjazovL29yZGVyZWRHcmlkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29yZGVyZWRHcmlkLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldENlbGxPcmRlciIsImRhdGEiLCJjb2wiLCJyb3ciLCJpbmRleCIsIm1vZGUiLCJ2ZXJ0SGFsZiIsImhvckhhbGYiLCJjZW50ZXJDZWxscyIsInNuYWtlSW5kZXhlcyIsInNwaXJhbEluZGV4ZXMiLCJ2ZXJ0IiwiaG9yIiwiZHZlcnQiLCJkaG9yIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibWluIiwibWF4IiwiaW5kZXhPZiIsImNyZWF0ZU9yZGVyZWRHcmlkIiwiZGltZW5zaW9ucyIsInRyYW5zcG9zZSIsInNpemVEYXRhIiwiZnVsbFdpZHRoIiwiZnVsbEhlaWdodCIsInVuaXRXaWR0aCIsInVuaXRIZWlnaHQiLCJpbml0WCIsImluaXRZIiwiZ2FwIiwiaXNGdWxsIiwiaXNVbml0IiwiY2hlY2tBcmd1bWVudHNzVmFsaWRpdHkiLCJjb2x1bW5zIiwicm93cyIsImdldEdyaWREYXRhIiwiYm91bmRHZXRPcmRlciIsImJpbmQiLCJ3IiwiaCIsImNlaWwiLCJvcmRlcmVkIiwiQXJyYXkiLCJmcm9tIiwiZ2V0Q2VsbCIsIm9yZGVycyIsIm1hcCIsImNlbGwiLCJvcmRlciIsInRyYW5zcE9yZGVycyIsInRyYW5zcG9zZUdyaWQiLCJmb3JFYWNoIiwiaSIsIl8iLCJjb2x1bW4iLCJ4IiwieSIsIk9iamVjdCIsImFzc2lnbiIsImdyaWQiLCJ0aW1lcyIsIm1hdHJpeCIsImNodW5rIiwiY29uc29sZSIsImxvZyIsInJlZHVjZSIsInJlc3VsdCIsImFyciIsImxlbmd0aCIsImNvbHVtbkluZGV4IiwicmVzdWx0Q29sdW1uSW5kZXgiLCJyb3dJbmRleCIsImFycmF5Iiwic2l6ZSIsInJlc0luZGV4Iiwic2xpY2UiLCJkaW1zIiwiaXNWYWxpZEFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwiZ2V0U25ha2VPcmRlciIsImdldFNwaXJhbE9yZGVyIiwic3BpcmFsIiwic2hpZnQiLCJiYXNlIiwiYmJmIiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZlLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxHQUE1QixFQUFpQ0MsR0FBakMsRUFBc0NDLEtBQXRDLEVBQTZDQyxJQUE3QyxFQUFtRDtBQUFBLE1BRXZEQyxRQUZ1RCxHQUVRTCxJQUZSLENBRXZESyxRQUZ1RDtBQUFBLE1BRTdDQyxPQUY2QyxHQUVRTixJQUZSLENBRTdDTSxPQUY2QztBQUFBLE1BRXBDQyxXQUZvQyxHQUVRUCxJQUZSLENBRXBDTyxXQUZvQztBQUFBLE1BRXZCQyxZQUZ1QixHQUVRUixJQUZSLENBRXZCUSxZQUZ1QjtBQUFBLE1BRVRDLGFBRlMsR0FFUVQsSUFGUixDQUVUUyxhQUZTOztBQUFBLG9DQUcxQ0YsV0FIMEM7QUFBQSxNQUd2REcsSUFIdUQ7QUFBQSxNQUdqREMsR0FIaUQ7O0FBSTlELE1BQUlDLEtBQUosRUFBV0MsSUFBWDs7QUFFQSxVQUFRVCxJQUFSO0FBQ0ksU0FBSyxDQUFMO0FBQ0ksYUFBT0QsS0FBUDs7QUFDSixTQUFLLENBQUw7QUFDSSxhQUFPRixHQUFQO0FBQVk7O0FBQ2hCLFNBQUssQ0FBTDtBQUNJLGFBQU9DLEdBQVA7QUFBWTs7QUFDaEIsU0FBSyxDQUFMO0FBQ0ksYUFBT0QsR0FBRyxHQUFHLENBQWI7QUFBZ0I7O0FBQ3BCLFNBQUssQ0FBTDtBQUNJLGFBQU9DLEdBQUcsR0FBRyxDQUFiO0FBQWdCOztBQUNwQixTQUFLLENBQUw7QUFBUTtBQUNKLFVBQUlBLEdBQUcsR0FBRyxDQUFWLEVBQWE7QUFDVCxlQUFPRCxHQUFHLEdBQUcsQ0FBTixHQUFVQSxHQUFHLEdBQUcsQ0FBTixHQUFVLENBQXBCLEdBQXdCQSxHQUFHLEdBQUcsQ0FBTixHQUFVLENBQXpDO0FBQ0g7O0FBQ0QsYUFBT0EsR0FBRyxHQUFHLENBQWI7O0FBQ0osU0FBSyxDQUFMO0FBQ0ksYUFBT2EsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsR0FBTCxDQUFTWCxRQUFRLEdBQUdILEdBQXBCLENBQVgsQ0FBUDtBQUE2Qzs7QUFDakQsU0FBSyxDQUFMO0FBQ0ksYUFBT1ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsR0FBTCxDQUFTVixPQUFPLEdBQUdMLEdBQW5CLENBQVgsQ0FBUDtBQUE0Qzs7QUFDaEQsU0FBSyxDQUFMO0FBQVE7QUFDSlcsV0FBSyxHQUFHRSxJQUFJLENBQUNHLEdBQUwsQ0FBU0gsSUFBSSxDQUFDRSxHQUFMLENBQVNOLElBQUksQ0FBQyxDQUFELENBQUosR0FBVVIsR0FBbkIsQ0FBVCxFQUFrQ1ksSUFBSSxDQUFDRSxHQUFMLENBQVNOLElBQUksQ0FBQyxDQUFELENBQUosR0FBVVIsR0FBbkIsQ0FBbEMsQ0FBUjtBQUNBVyxVQUFJLEdBQUdDLElBQUksQ0FBQ0csR0FBTCxDQUFTSCxJQUFJLENBQUNFLEdBQUwsQ0FBU0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTVixHQUFsQixDQUFULEVBQWlDYSxJQUFJLENBQUNFLEdBQUwsQ0FBU0wsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTVixHQUFsQixDQUFqQyxDQUFQO0FBQ0EsYUFBT2EsSUFBSSxDQUFDSSxHQUFMLENBQVNOLEtBQVQsRUFBZ0JDLElBQWhCLENBQVA7O0FBQ0osU0FBSyxDQUFMO0FBQ0ksYUFBT0wsWUFBWSxDQUFDTCxLQUFELENBQW5CO0FBQTRCOztBQUNoQyxTQUFLLEVBQUw7QUFDSSxhQUFPTSxhQUFhLENBQUNVLE9BQWQsQ0FBc0JoQixLQUF0QixDQUFQO0FBM0JSO0FBOEJILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFFTyxTQUFTaUIsaUJBQVQsQ0FBMkJDLFVBQTNCLEVBQStFO0FBQUEsTUFBeENqQixJQUF3Qyx1RUFBakMsQ0FBaUM7QUFBQSxNQUE5QmtCLFNBQThCLHVFQUFsQixDQUFrQjtBQUFBLE1BQWZDLFFBQWUsdUVBQUosRUFBSTtBQUFBLE1BRzlFQyxTQUg4RSxHQVU5RUQsUUFWOEUsQ0FHOUVDLFNBSDhFO0FBQUEsTUFJOUVDLFVBSjhFLEdBVTlFRixRQVY4RSxDQUk5RUUsVUFKOEU7QUFBQSxNQUs5RUMsU0FMOEUsR0FVOUVILFFBVjhFLENBSzlFRyxTQUw4RTtBQUFBLE1BTTlFQyxVQU44RSxHQVU5RUosUUFWOEUsQ0FNOUVJLFVBTjhFO0FBQUEsd0JBVTlFSixRQVY4RSxDQU85RUssS0FQOEU7QUFBQSxNQU85RUEsS0FQOEUsZ0NBT3RFLENBUHNFO0FBQUEsd0JBVTlFTCxRQVY4RSxDQVE5RU0sS0FSOEU7QUFBQSxNQVE5RUEsS0FSOEUsZ0NBUXRFLENBUnNFO0FBQUEsc0JBVTlFTixRQVY4RSxDQVM5RU8sR0FUOEU7QUFBQSxNQVM5RUEsR0FUOEUsOEJBU3hFLENBVHdFO0FBV2xGLE1BQU1DLE1BQU0sR0FBR1AsU0FBUyxJQUFJQyxVQUE1QjtBQUNBLE1BQU1PLE1BQU0sR0FBR04sU0FBUyxJQUFJQyxVQUE1QjtBQUNBTSx5QkFBdUIsQ0FBQ1osVUFBRCxDQUF2Qjs7QUFia0YsbUNBZTFEQSxVQWYwRDtBQUFBLE1BZTNFYSxPQWYyRTtBQUFBLE1BZWxFQyxJQWZrRTs7QUFnQmxGLE1BQU1uQyxJQUFJLEdBQUdvQyxzREFBVyxDQUFDRixPQUFELEVBQVVDLElBQVYsRUFBZ0IvQixJQUFoQixDQUF4QjtBQUNBLE1BQU1pQyxhQUFhLEdBQUd0QyxrREFBWSxDQUFDdUMsSUFBYixDQUFrQixJQUFsQixFQUF3QnRDLElBQXhCLENBQXRCO0FBRUEsTUFBSXVDLENBQUosRUFBT0MsQ0FBUDs7QUFDQSxNQUFJVCxNQUFKLEVBQVk7QUFDUlMsS0FBQyxHQUFHMUIsSUFBSSxDQUFDMkIsSUFBTCxDQUFVLENBQUNoQixVQUFVLEdBQUdVLElBQUksR0FBR0wsR0FBcEIsR0FBMEJBLEdBQTNCLElBQWtDSyxJQUE1QyxDQUFKO0FBQ0FJLEtBQUMsR0FBR3pCLElBQUksQ0FBQzJCLElBQUwsQ0FBVSxDQUFDakIsU0FBUyxHQUFHVSxPQUFPLEdBQUdKLEdBQXRCLEdBQTRCQSxHQUE3QixJQUFvQ0ksT0FBOUMsQ0FBSjtBQUNILEdBSEQsTUFHTyxJQUFJRixNQUFKLEVBQVk7QUFDZlEsS0FBQyxHQUFHYixVQUFKO0FBQ0FZLEtBQUMsR0FBR2IsU0FBSjtBQUNIOztBQUVELE1BQUlnQixPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUNULE9BQU8sR0FBR0MsSUFBWCxDQUFoQixFQUFrQ1UsT0FBbEMsQ0FBZDs7QUFDQSxNQUFJdkIsU0FBSixFQUFlO0FBQ1gsUUFBTXdCLE1BQU0sR0FBR0osT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsS0FBVDtBQUFBLEtBQWhCLENBQWY7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLGFBQWEsQ0FBQ0wsTUFBRCxFQUFTWixPQUFULEVBQWtCWixTQUFsQixDQUFsQztBQUNBNEIsZ0JBQVksQ0FBQ0UsT0FBYixDQUFxQixVQUFDSCxLQUFELEVBQVFJLENBQVIsRUFBYztBQUMvQlgsYUFBTyxDQUFDVyxDQUFELENBQVAsQ0FBV0osS0FBWCxHQUFtQkEsS0FBbkI7QUFDSCxLQUZEO0FBR0g7O0FBQ0QsU0FBT1AsT0FBUDs7QUFFQSxXQUFTRyxPQUFULENBQWlCUyxDQUFqQixFQUFvQm5ELEtBQXBCLEVBQTJCO0FBRXZCLFFBQUlvRCxNQUFNLEdBQUdwRCxLQUFLLEdBQUcrQixPQUFyQjtBQUNBLFFBQUloQyxHQUFHLEdBQUdZLElBQUksQ0FBQ0MsS0FBTCxDQUFXWixLQUFLLEdBQUcrQixPQUFuQixDQUFWO0FBQ0EsUUFBTWUsS0FBSyxHQUFHWixhQUFhLENBQUNrQixNQUFELEVBQVNyRCxHQUFULEVBQWNDLEtBQWQsRUFBcUJDLElBQXJCLENBQTNCLENBSnVCLENBS3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBTTRDLElBQUksR0FBRztBQUFDTyxZQUFNLEVBQU5BLE1BQUQ7QUFBU3JELFNBQUcsRUFBSEEsR0FBVDtBQUFjK0MsV0FBSyxFQUFMQSxLQUFkO0FBQXFCOUMsV0FBSyxFQUFMQTtBQUFyQixLQUFiOztBQUVBLFFBQUk0QixNQUFNLElBQUlDLE1BQWQsRUFBc0I7QUFDbEIsVUFBTXdCLENBQUMsR0FBRzVCLEtBQUssR0FBRzJCLE1BQU0sSUFBSWhCLENBQUMsR0FBR1QsR0FBUixDQUF4QjtBQUNBLFVBQU0yQixDQUFDLEdBQUc1QixLQUFLLEdBQUczQixHQUFHLElBQUlzQyxDQUFDLEdBQUdWLEdBQVIsQ0FBckI7QUFDQTRCLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjWCxJQUFkLEVBQW9CO0FBQUNRLFNBQUMsRUFBREEsQ0FBRDtBQUFJQyxTQUFDLEVBQURBLENBQUo7QUFBT2xCLFNBQUMsRUFBREEsQ0FBUDtBQUFVQyxTQUFDLEVBQURBO0FBQVYsT0FBcEI7QUFDSDs7QUFFRCxXQUFPUSxJQUFQO0FBQ0g7QUFDSjs7QUFHRCxTQUFTRyxhQUFULENBQXVCUyxJQUF2QixFQUE2QjFCLE9BQTdCLEVBQXNDMkIsS0FBdEMsRUFBNkM7QUFDekMsTUFBSUMsTUFBTSxHQUFHQyxLQUFLLENBQUNILElBQUQsRUFBTzFCLE9BQVAsQ0FBbEI7QUFDQThCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaOztBQUNBLFNBQU1ELEtBQU4sRUFBYTtBQUNUQSxTQUFLO0FBQ0xDLFVBQU0sR0FBR3hDLFNBQVMsQ0FBQ3dDLE1BQUQsQ0FBbEI7QUFDSDs7QUFDRCxTQUFPQSxNQUFNLENBQUNJLE1BQVAsQ0FBYyxVQUFDQyxNQUFELEVBQVNDLEdBQVQ7QUFBQSx3Q0FBcUJELE1BQXJCLHNCQUFnQ0MsR0FBaEM7QUFBQSxHQUFkLEVBQW9ELEVBQXBELENBQVA7QUFDSDs7QUFFRCxTQUFTOUMsU0FBVCxDQUFtQndDLE1BQW5CLEVBQTJCO0FBQ3ZCLE1BQU1QLE1BQU0sR0FBR08sTUFBTSxDQUFDLENBQUQsQ0FBckI7QUFDQSxNQUFJLENBQUNQLE1BQUwsRUFBYSxPQUFPTyxNQUFQO0FBQ2IsTUFBTTVCLE9BQU8sR0FBR3FCLE1BQU0sQ0FBQ2MsTUFBdkI7QUFDQSxNQUFNbEMsSUFBSSxHQUFHMkIsTUFBTSxDQUFDTyxNQUFwQjtBQUNBLE1BQU1GLE1BQU0sR0FBRyxJQUFJeEIsS0FBSixDQUFVVCxPQUFWLENBQWY7QUFDQSxNQUFJb0MsV0FBSjtBQUNBLE1BQUlDLGlCQUFKO0FBQ0EsTUFBSUMsUUFBSjs7QUFDQSxPQUFLRCxpQkFBaUIsR0FBRyxDQUFwQixFQUF1QkQsV0FBVyxHQUFHcEMsT0FBTyxHQUFHLENBQXBELEVBQXVEb0MsV0FBVyxJQUFJLENBQXRFLEVBQXlFQSxXQUFXLElBQUlDLGlCQUFpQixFQUF6RyxFQUE2RztBQUN6R0osVUFBTSxDQUFDSSxpQkFBRCxDQUFOLEdBQTRCLElBQUk1QixLQUFKLENBQVVSLElBQVYsQ0FBNUI7O0FBQ0EsU0FBS3FDLFFBQVEsR0FBRyxDQUFoQixFQUFtQkEsUUFBUSxHQUFHckMsSUFBOUIsRUFBb0NxQyxRQUFRLEVBQTVDLEVBQWdEO0FBQzVDTCxZQUFNLENBQUNJLGlCQUFELENBQU4sQ0FBMEJDLFFBQTFCLElBQXNDVixNQUFNLENBQUNVLFFBQUQsQ0FBTixDQUFpQkYsV0FBakIsQ0FBdEM7QUFDSDtBQUNKOztBQUNELFNBQU9ILE1BQVA7QUFDSDs7QUFFRCxTQUFTSixLQUFULENBQWVVLEtBQWYsRUFBc0JDLElBQXRCLEVBQTRCO0FBRXhCLE1BQU1MLE1BQU0sR0FBR0ksS0FBSyxJQUFJLElBQVQsR0FBZ0IsQ0FBaEIsR0FBb0JBLEtBQUssQ0FBQ0osTUFBekM7O0FBQ0EsTUFBSSxDQUFDQSxNQUFELElBQVdLLElBQUksR0FBRyxDQUF0QixFQUF5QjtBQUNyQixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFJdkUsS0FBSyxHQUFHLENBQVo7QUFBQSxNQUNJd0UsUUFBUSxHQUFHLENBRGY7QUFBQSxNQUVJUixNQUFNLEdBQUd4QixLQUFLLENBQUM3QixJQUFJLENBQUMyQixJQUFMLENBQVU0QixNQUFNLEdBQUdLLElBQW5CLENBQUQsQ0FGbEI7O0FBSUEsU0FBT3ZFLEtBQUssR0FBR2tFLE1BQWYsRUFBdUI7QUFDbkJGLFVBQU0sQ0FBQ1EsUUFBUSxFQUFULENBQU4sR0FBcUJGLEtBQUssQ0FBQ0csS0FBTixDQUFZekUsS0FBWixFQUFvQkEsS0FBSyxJQUFJdUUsSUFBN0IsQ0FBckI7QUFDSDs7QUFDRCxTQUFPUCxNQUFQO0FBQ0g7O0FBRUQsU0FBU2xDLHVCQUFULENBQWlDNEMsSUFBakMsRUFBdUM7QUFFbkMsTUFBTUMsWUFBWSxHQUFHbkMsS0FBSyxDQUFDb0MsT0FBTixDQUFjRixJQUFkLEtBQXVCQSxJQUFJLENBQUNSLE1BQUwsS0FBZ0IsQ0FBdkMsSUFBNEMsQ0FBQ1EsSUFBSSxDQUFDLENBQUQsQ0FBakQsSUFBd0QsQ0FBQ0EsSUFBSSxDQUFDLENBQUQsQ0FBbEY7O0FBRUEsTUFBSSxDQUFDQyxZQUFMLEVBQW1CO0FBQ2YsVUFBTSxJQUFJRSxLQUFKLENBQVUscUZBQVYsQ0FBTjtBQUNIO0FBRUosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIYyxTQUFTNUMsV0FBVCxDQUFxQkYsT0FBckIsRUFBOEJDLElBQTlCLEVBQW9DL0IsSUFBcEMsRUFBMEM7QUFFckQsTUFBTUMsUUFBUSxHQUFHLENBQUM4QixJQUFJLEdBQUcsQ0FBUixJQUFhLENBQTlCO0FBQ0EsTUFBTTdCLE9BQU8sR0FBRyxDQUFDNEIsT0FBTyxHQUFHLENBQVgsSUFBZ0IsQ0FBaEM7QUFFQSxNQUFNbEMsSUFBSSxHQUFHO0FBQ1RLLFlBQVEsRUFBUkEsUUFEUztBQUVUQyxXQUFPLEVBQVBBLE9BRlM7QUFHVEMsZUFBVyxFQUFFLEVBSEo7QUFJVEMsZ0JBQVksRUFBRSxFQUpMO0FBS1RDLGlCQUFhLEVBQUU7QUFMTixHQUFiOztBQVFBLFVBQVFMLElBQVI7QUFFSSxTQUFLLENBQUw7QUFDSSxVQUFJOEIsT0FBTyxHQUFHLENBQWQsRUFBaUI7QUFDYixZQUFJQyxJQUFJLEdBQUcsQ0FBWCxFQUFjO0FBQ1ZuQyxjQUFJLENBQUNPLFdBQUwsR0FBbUIsQ0FBQyxDQUFDRixRQUFELEVBQVdBLFFBQVgsQ0FBRCxFQUF1QixDQUFDQyxPQUFELEVBQVVBLE9BQVYsQ0FBdkIsQ0FBbkI7QUFDSCxTQUZELE1BRU87QUFDSE4sY0FBSSxDQUFDTyxXQUFMLEdBQW1CLENBQUMsQ0FBQ08sSUFBSSxDQUFDQyxLQUFMLENBQVdWLFFBQVgsQ0FBRCxFQUF1QlMsSUFBSSxDQUFDMkIsSUFBTCxDQUFVcEMsUUFBVixDQUF2QixDQUFELEVBQThDLENBQUNDLE9BQUQsRUFBVUEsT0FBVixDQUE5QyxDQUFuQjtBQUNIO0FBQ0osT0FORCxNQU1PO0FBQ0gsWUFBSTZCLElBQUksR0FBRyxDQUFYLEVBQWM7QUFDVm5DLGNBQUksQ0FBQ08sV0FBTCxHQUFtQixDQUFDLENBQUNGLFFBQUQsRUFBV0EsUUFBWCxDQUFELEVBQXVCLENBQUNTLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxPQUFYLENBQUQsRUFBc0JRLElBQUksQ0FBQzJCLElBQUwsQ0FBVW5DLE9BQVYsQ0FBdEIsQ0FBdkIsQ0FBbkI7QUFDSCxTQUZELE1BRU87QUFDSE4sY0FBSSxDQUFDTyxXQUFMLEdBQW1CLENBQUMsQ0FBQ08sSUFBSSxDQUFDQyxLQUFMLENBQVdWLFFBQVgsQ0FBRCxFQUF1QlMsSUFBSSxDQUFDMkIsSUFBTCxDQUFVcEMsUUFBVixDQUF2QixDQUFELEVBQThDLENBQUNTLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxPQUFYLENBQUQsRUFBc0JRLElBQUksQ0FBQzJCLElBQUwsQ0FBVW5DLE9BQVYsQ0FBdEIsQ0FBOUMsQ0FBbkI7QUFDSDtBQUNKOztBQUNEOztBQUVKLFNBQUssQ0FBTDtBQUNJTixVQUFJLENBQUNRLFlBQUwsR0FBb0J5RSxhQUFhLENBQUMvQyxPQUFELEVBQVVDLElBQVYsQ0FBakM7QUFDQTs7QUFFSixTQUFLLEVBQUw7QUFDSW5DLFVBQUksQ0FBQ1MsYUFBTCxHQUFxQnlFLGNBQWMsQ0FBQ2hELE9BQUQsRUFBVUMsSUFBVixDQUFuQztBQUNBO0FBeEJSOztBQTJCQSxTQUFPbkMsSUFBUDtBQUNIOztBQUVELFNBQVNtRixNQUFULENBQWdCckIsTUFBaEIsRUFBd0I1QixPQUF4QixFQUFpQ0MsSUFBakMsRUFBdUM7QUFDbkMsTUFBSWpDLEdBQUo7QUFBQSxNQUFTQyxLQUFLLEdBQUcsQ0FBakI7QUFDQSxNQUFNZ0UsTUFBTSxHQUFHLElBQUl4QixLQUFKLENBQVVULE9BQU8sR0FBR0MsSUFBcEIsQ0FBZjs7QUFFQSxTQUFPMkIsTUFBTSxDQUFDTyxNQUFkLEVBQXNCO0FBQ2xCbkUsT0FBRyxHQUFHNEQsTUFBTSxDQUFDc0IsS0FBUCxFQUFOOztBQUNBLFdBQU9sRixHQUFHLENBQUNtRSxNQUFYLEVBQW1CO0FBQ2ZGLFlBQU0sQ0FBQ2hFLEtBQUssRUFBTixDQUFOLEdBQWtCRCxHQUFHLENBQUNrRixLQUFKLEVBQWxCO0FBQ0g7O0FBQ0R0QixVQUFNLEdBQUd4QyxTQUFTLENBQUN3QyxNQUFELENBQWxCO0FBQ0g7O0FBQ0QsU0FBT0ssTUFBUDtBQUNIOztBQUVELFNBQVM3QyxTQUFULENBQW1Cd0MsTUFBbkIsRUFBMkI7QUFDdkIsTUFBTVAsTUFBTSxHQUFHTyxNQUFNLENBQUMsQ0FBRCxDQUFyQjtBQUNBLE1BQUksQ0FBQ1AsTUFBTCxFQUFhLE9BQU9PLE1BQVA7QUFDYixNQUFNNUIsT0FBTyxHQUFHcUIsTUFBTSxDQUFDYyxNQUF2QjtBQUNBLE1BQU1sQyxJQUFJLEdBQUcyQixNQUFNLENBQUNPLE1BQXBCO0FBQ0EsTUFBTUYsTUFBTSxHQUFHLElBQUl4QixLQUFKLENBQVVULE9BQVYsQ0FBZjtBQUNBLE1BQUlvQyxXQUFKO0FBQ0EsTUFBSUMsaUJBQUo7QUFDQSxNQUFJQyxRQUFKOztBQUNBLE9BQUtELGlCQUFpQixHQUFHLENBQXBCLEVBQXVCRCxXQUFXLEdBQUdwQyxPQUFPLEdBQUcsQ0FBcEQsRUFBdURvQyxXQUFXLElBQUksQ0FBdEUsRUFBeUVBLFdBQVcsSUFBSUMsaUJBQWlCLEVBQXpHLEVBQTZHO0FBQ3pHSixVQUFNLENBQUNJLGlCQUFELENBQU4sR0FBNEIsSUFBSTVCLEtBQUosQ0FBVVIsSUFBVixDQUE1Qjs7QUFDQSxTQUFLcUMsUUFBUSxHQUFHLENBQWhCLEVBQW1CQSxRQUFRLEdBQUdyQyxJQUE5QixFQUFvQ3FDLFFBQVEsRUFBNUMsRUFBZ0Q7QUFDNUNMLFlBQU0sQ0FBQ0ksaUJBQUQsQ0FBTixDQUEwQkMsUUFBMUIsSUFBc0NWLE1BQU0sQ0FBQ1UsUUFBRCxDQUFOLENBQWlCRixXQUFqQixDQUF0QztBQUNIO0FBQ0o7O0FBQ0QsU0FBT0gsTUFBUDtBQUNIOztBQUVELFNBQVNKLEtBQVQsQ0FBZVUsS0FBZixFQUFzQkMsSUFBdEIsRUFBNEI7QUFFeEIsTUFBTUwsTUFBTSxHQUFHSSxLQUFLLElBQUksSUFBVCxHQUFnQixDQUFoQixHQUFvQkEsS0FBSyxDQUFDSixNQUF6Qzs7QUFDQSxNQUFJLENBQUNBLE1BQUQsSUFBV0ssSUFBSSxHQUFHLENBQXRCLEVBQXlCO0FBQ3JCLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQUl2RSxLQUFLLEdBQUcsQ0FBWjtBQUFBLE1BQ0l3RSxRQUFRLEdBQUcsQ0FEZjtBQUFBLE1BRUlSLE1BQU0sR0FBR3hCLEtBQUssQ0FBQzdCLElBQUksQ0FBQzJCLElBQUwsQ0FBVTRCLE1BQU0sR0FBR0ssSUFBbkIsQ0FBRCxDQUZsQjs7QUFJQSxTQUFPdkUsS0FBSyxHQUFHa0UsTUFBZixFQUF1QjtBQUNuQkYsVUFBTSxDQUFDUSxRQUFRLEVBQVQsQ0FBTixHQUFxQkYsS0FBSyxDQUFDRyxLQUFOLENBQVl6RSxLQUFaLEVBQW9CQSxLQUFLLElBQUl1RSxJQUE3QixDQUFyQjtBQUNIOztBQUNELFNBQU9QLE1BQVA7QUFDSDs7QUFFRCxTQUFTYyxhQUFULENBQXVCL0MsT0FBdkIsRUFBZ0NDLElBQWhDLEVBQXNDO0FBQ2xDLE1BQU1rRCxJQUFJLEdBQUcxQyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDVCxPQUFPLEdBQUdDLElBQVgsQ0FBaEIsRUFBa0MsVUFBQ21CLENBQUQsRUFBSUQsQ0FBSjtBQUFBLFdBQVVBLENBQVY7QUFBQSxHQUFsQyxDQUFiO0FBQ0EsTUFBTVMsTUFBTSxHQUFHQyxLQUFLLENBQUNzQixJQUFELEVBQU9uRCxPQUFQLENBQXBCO0FBQ0EsTUFBTW9ELEdBQUcsR0FBR3hCLE1BQU0sQ0FBQ2YsR0FBUCxDQUFXLFVBQUNxQixHQUFELEVBQU1mLENBQU47QUFBQSxXQUFZQSxDQUFDLEdBQUcsQ0FBSixHQUFRZSxHQUFHLENBQUNtQixPQUFKLEVBQVIsR0FBd0JuQixHQUFwQztBQUFBLEdBQVgsQ0FBWjtBQUNBLFNBQU9rQixHQUFHLENBQUNwQixNQUFKLENBQVcsVUFBQ0MsTUFBRCxFQUFTQyxHQUFUO0FBQUEsd0NBQXFCRCxNQUFyQixzQkFBZ0NDLEdBQWhDO0FBQUEsR0FBWCxFQUFpRCxFQUFqRCxDQUFQO0FBQ0g7O0FBRUQsU0FBU2MsY0FBVCxDQUF3QmhELE9BQXhCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUNuQyxNQUFNa0QsSUFBSSxHQUFHMUMsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ1QsT0FBTyxHQUFHQyxJQUFYLENBQWhCLEVBQWtDLFVBQUNtQixDQUFELEVBQUlELENBQUo7QUFBQSxXQUFVQSxDQUFWO0FBQUEsR0FBbEMsQ0FBYjtBQUNBLE1BQU1TLE1BQU0sR0FBR0MsS0FBSyxDQUFDc0IsSUFBRCxFQUFPbkQsT0FBUCxDQUFwQjtBQUNBLFNBQU9pRCxNQUFNLENBQUNyQixNQUFELEVBQVM1QixPQUFULEVBQWtCQyxJQUFsQixDQUFiO0FBQ0gsQyIsImZpbGUiOiJvcmRlcmVkLWdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvcmRlcmVkR3JpZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvcmRlcmVkR3JpZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDZWxsT3JkZXIoZGF0YSwgY29sLCByb3csIGluZGV4LCBtb2RlKSB7XHJcblxyXG4gICAgY29uc3Qge3ZlcnRIYWxmLCBob3JIYWxmLCBjZW50ZXJDZWxscywgc25ha2VJbmRleGVzLCBzcGlyYWxJbmRleGVzfSA9IGRhdGE7XHJcbiAgICBjb25zdCBbdmVydCwgaG9yXSA9IGNlbnRlckNlbGxzO1xyXG4gICAgbGV0IGR2ZXJ0LCBkaG9yO1xyXG5cclxuICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbDsgLy8gY29sdW1uc1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgcmV0dXJuIHJvdzsgLy8gcm93c1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbCAlIDI7IC8vIHN0cmlwZXMgdmVydC5cclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHJldHVybiByb3cgJSAyOyAvLyBzdHJpcGVzIGhvci5cclxuICAgICAgICBjYXNlIDU6IC8vIGNoZWNrZXJib2FyZFxyXG4gICAgICAgICAgICBpZiAocm93ICUgMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbCAlIDIgPyBjb2wgJSAyIC0gMSA6IGNvbCAlIDIgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2wgJSAyO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5hYnModmVydEhhbGYgLSByb3cpKTsgLy8gZnJvbSBjZW50ZXIgdG8gdG9wL2JvdHRvbVxyXG4gICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5hYnMoaG9ySGFsZiAtIGNvbCkpOyAvLyBmcm9tIGNlbnRlciB0byBsZWZ0L3JpZ2h0XHJcbiAgICAgICAgY2FzZSA4OiAvLyBmcm9tIGNlbnRlclxyXG4gICAgICAgICAgICBkdmVydCA9IE1hdGgubWluKE1hdGguYWJzKHZlcnRbMF0gLSByb3cpLCBNYXRoLmFicyh2ZXJ0WzFdIC0gcm93KSk7XHJcbiAgICAgICAgICAgIGRob3IgPSBNYXRoLm1pbihNYXRoLmFicyhob3JbMF0gLSBjb2wpLCBNYXRoLmFicyhob3JbMV0gLSBjb2wpKTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGR2ZXJ0LCBkaG9yKTtcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgIHJldHVybiBzbmFrZUluZGV4ZXNbaW5kZXhdOyAvLyBzbmFrZVxyXG4gICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgIHJldHVybiBzcGlyYWxJbmRleGVzLmluZGV4T2YoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBnZXRDZWxsT3JkZXIgZnJvbSAnLi9jZWxsT3JkZXInO1xyXG5pbXBvcnQgZ2V0R3JpZERhdGEgZnJvbSAnLi91dGlscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3JkZXJlZEdyaWQoZGltZW5zaW9ucywgbW9kZSA9IDAsIHRyYW5zcG9zZSA9IDAsIHNpemVEYXRhID0ge30pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZnVsbFdpZHRoLFxyXG4gICAgICAgIGZ1bGxIZWlnaHQsXHJcbiAgICAgICAgdW5pdFdpZHRoLFxyXG4gICAgICAgIHVuaXRIZWlnaHQsXHJcbiAgICAgICAgaW5pdFggPSAwLFxyXG4gICAgICAgIGluaXRZID0gMCxcclxuICAgICAgICBnYXAgPSAwXHJcbiAgICB9ID0gc2l6ZURhdGE7XHJcbiAgICBjb25zdCBpc0Z1bGwgPSBmdWxsV2lkdGggJiYgZnVsbEhlaWdodDtcclxuICAgIGNvbnN0IGlzVW5pdCA9IHVuaXRXaWR0aCAmJiB1bml0SGVpZ2h0O1xyXG4gICAgY2hlY2tBcmd1bWVudHNzVmFsaWRpdHkoZGltZW5zaW9ucyk7XHJcblxyXG4gICAgY29uc3QgW2NvbHVtbnMsIHJvd3NdID0gZGltZW5zaW9ucztcclxuICAgIGNvbnN0IGRhdGEgPSBnZXRHcmlkRGF0YShjb2x1bW5zLCByb3dzLCBtb2RlKTtcclxuICAgIGNvbnN0IGJvdW5kR2V0T3JkZXIgPSBnZXRDZWxsT3JkZXIuYmluZChudWxsLCBkYXRhKTtcclxuXHJcbiAgICBsZXQgdywgaDtcclxuICAgIGlmIChpc0Z1bGwpIHtcclxuICAgICAgICBoID0gTWF0aC5jZWlsKChmdWxsSGVpZ2h0IC0gcm93cyAqIGdhcCArIGdhcCkgLyByb3dzKTtcclxuICAgICAgICB3ID0gTWF0aC5jZWlsKChmdWxsV2lkdGggLSBjb2x1bW5zICogZ2FwICsgZ2FwKSAvIGNvbHVtbnMpO1xyXG4gICAgfSBlbHNlIGlmIChpc1VuaXQpIHtcclxuICAgICAgICBoID0gdW5pdEhlaWdodDtcclxuICAgICAgICB3ID0gdW5pdFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvcmRlcmVkID0gQXJyYXkuZnJvbShBcnJheShjb2x1bW5zICogcm93cyksIGdldENlbGwpO1xyXG4gICAgaWYgKHRyYW5zcG9zZSkge1xyXG4gICAgICAgIGNvbnN0IG9yZGVycyA9IG9yZGVyZWQubWFwKGNlbGwgPT4gY2VsbC5vcmRlcik7XHJcbiAgICAgICAgY29uc3QgdHJhbnNwT3JkZXJzID0gdHJhbnNwb3NlR3JpZChvcmRlcnMsIGNvbHVtbnMsIHRyYW5zcG9zZSk7XHJcbiAgICAgICAgdHJhbnNwT3JkZXJzLmZvckVhY2goKG9yZGVyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIG9yZGVyZWRbaV0ub3JkZXIgPSBvcmRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcmRlcmVkO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENlbGwoXywgaW5kZXgpIHtcclxuXHJcbiAgICAgICAgbGV0IGNvbHVtbiA9IGluZGV4ICUgY29sdW1ucztcclxuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIGNvbHVtbnMpO1xyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gYm91bmRHZXRPcmRlcihjb2x1bW4sIHJvdywgaW5kZXgsIG1vZGUpO1xyXG4gICAgICAgIC8vIGxldCBjb2x1bW4sIHJvdztcclxuICAgICAgICAvLyBpZiAodHJhbnNwb3NlKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbHVtbiA9IF9yb3c7XHJcbiAgICAgICAgLy8gICAgIHJvdyA9IF9jb2x1bW47XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29sdW1uID0gX2NvbHVtbjtcclxuICAgICAgICAvLyAgICAgcm93ID0gX3JvdztcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IHtjb2x1bW4sIHJvdywgb3JkZXIsIGluZGV4fTtcclxuXHJcbiAgICAgICAgaWYgKGlzRnVsbCB8fCBpc1VuaXQpIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGluaXRYICsgY29sdW1uICogKHcgKyBnYXApO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gaW5pdFkgKyByb3cgKiAoaCArIGdhcCk7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2VsbCwge3gsIHksIHcsIGh9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjZWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdHJhbnNwb3NlR3JpZChncmlkLCBjb2x1bW5zLCB0aW1lcykge1xyXG4gICAgbGV0IG1hdHJpeCA9IGNodW5rKGdyaWQsIGNvbHVtbnMpO1xyXG4gICAgY29uc29sZS5sb2cobWF0cml4KTtcclxuICAgIHdoaWxlKHRpbWVzKSB7XHJcbiAgICAgICAgdGltZXMtLTtcclxuICAgICAgICBtYXRyaXggPSB0cmFuc3Bvc2UobWF0cml4KTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXRyaXgucmVkdWNlKChyZXN1bHQsIGFycikgPT4gWy4uLnJlc3VsdCwgLi4uYXJyXSwgW10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFuc3Bvc2UobWF0cml4KSB7XHJcbiAgICBjb25zdCBjb2x1bW4gPSBtYXRyaXhbMF07XHJcbiAgICBpZiAoIWNvbHVtbikgcmV0dXJuIG1hdHJpeDtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBjb2x1bW4ubGVuZ3RoO1xyXG4gICAgY29uc3Qgcm93cyA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkoY29sdW1ucyk7XHJcbiAgICBsZXQgY29sdW1uSW5kZXg7XHJcbiAgICBsZXQgcmVzdWx0Q29sdW1uSW5kZXg7XHJcbiAgICBsZXQgcm93SW5kZXg7XHJcbiAgICBmb3IgKHJlc3VsdENvbHVtbkluZGV4ID0gMCwgY29sdW1uSW5kZXggPSBjb2x1bW5zIC0gMTsgY29sdW1uSW5kZXggPj0gMDsgY29sdW1uSW5kZXgtLSwgcmVzdWx0Q29sdW1uSW5kZXgrKykge1xyXG4gICAgICAgIHJlc3VsdFtyZXN1bHRDb2x1bW5JbmRleF0gPSBuZXcgQXJyYXkocm93cyk7XHJcbiAgICAgICAgZm9yIChyb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgcm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Q29sdW1uSW5kZXhdW3Jvd0luZGV4XSA9IG1hdHJpeFtyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNodW5rKGFycmF5LCBzaXplKSB7XHJcblxyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XHJcbiAgICBpZiAoIWxlbmd0aCB8fCBzaXplIDwgMSkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgcmVzSW5kZXggPSAwLFxyXG4gICAgICAgIHJlc3VsdCA9IEFycmF5KE1hdGguY2VpbChsZW5ndGggLyBzaXplKSk7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gYXJyYXkuc2xpY2UoaW5kZXgsIChpbmRleCArPSBzaXplKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0FyZ3VtZW50c3NWYWxpZGl0eShkaW1zKSB7XHJcblxyXG4gICAgY29uc3QgaXNWYWxpZEFycmF5ID0gQXJyYXkuaXNBcnJheShkaW1zKSAmJiBkaW1zLmxlbmd0aCA9PT0gMiAmJiArZGltc1swXSAmJiArZGltc1sxXTtcclxuXHJcbiAgICBpZiAoIWlzVmFsaWRBcnJheSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRpbWVuc2lvbnMgYXJndW1lbnQgaGFzIHRvIGJlIGFuIGFycmF5IGNvbnRhaW5pbmcgdHdvIG51bWJlcnMgZ3JlYXRlciB0aGFuIHplcm8nKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHcmlkRGF0YShjb2x1bW5zLCByb3dzLCBtb2RlKSB7XHJcblxyXG4gICAgY29uc3QgdmVydEhhbGYgPSAocm93cyAtIDEpIC8gMjtcclxuICAgIGNvbnN0IGhvckhhbGYgPSAoY29sdW1ucyAtIDEpIC8gMjtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHZlcnRIYWxmLFxyXG4gICAgICAgIGhvckhhbGYsXHJcbiAgICAgICAgY2VudGVyQ2VsbHM6IFtdLFxyXG4gICAgICAgIHNuYWtlSW5kZXhlczogW10sXHJcbiAgICAgICAgc3BpcmFsSW5kZXhlczogW10sXHJcbiAgICB9O1xyXG5cclxuICAgIHN3aXRjaCAobW9kZSkge1xyXG5cclxuICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5zICUgMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd3MgJSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jZW50ZXJDZWxscyA9IFtbdmVydEhhbGYsIHZlcnRIYWxmXSwgW2hvckhhbGYsIGhvckhhbGZdXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jZW50ZXJDZWxscyA9IFtbTWF0aC5mbG9vcih2ZXJ0SGFsZiksIE1hdGguY2VpbCh2ZXJ0SGFsZildLCBbaG9ySGFsZiwgaG9ySGFsZl1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd3MgJSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jZW50ZXJDZWxscyA9IFtbdmVydEhhbGYsIHZlcnRIYWxmXSwgW01hdGguZmxvb3IoaG9ySGFsZiksIE1hdGguY2VpbChob3JIYWxmKV1dO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNlbnRlckNlbGxzID0gW1tNYXRoLmZsb29yKHZlcnRIYWxmKSwgTWF0aC5jZWlsKHZlcnRIYWxmKV0sIFtNYXRoLmZsb29yKGhvckhhbGYpLCBNYXRoLmNlaWwoaG9ySGFsZildXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICBkYXRhLnNuYWtlSW5kZXhlcyA9IGdldFNuYWtlT3JkZXIoY29sdW1ucywgcm93cyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICBkYXRhLnNwaXJhbEluZGV4ZXMgPSBnZXRTcGlyYWxPcmRlcihjb2x1bW5zLCByb3dzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwaXJhbChtYXRyaXgsIGNvbHVtbnMsIHJvd3MpIHtcclxuICAgIGxldCByb3csIGluZGV4ID0gMDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheShjb2x1bW5zICogcm93cyk7XHJcblxyXG4gICAgd2hpbGUgKG1hdHJpeC5sZW5ndGgpIHtcclxuICAgICAgICByb3cgPSBtYXRyaXguc2hpZnQoKTtcclxuICAgICAgICB3aGlsZSAocm93Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHRbaW5kZXgrK10gPSByb3cuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0cml4ID0gdHJhbnNwb3NlKG1hdHJpeCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFuc3Bvc2UobWF0cml4KSB7XHJcbiAgICBjb25zdCBjb2x1bW4gPSBtYXRyaXhbMF07XHJcbiAgICBpZiAoIWNvbHVtbikgcmV0dXJuIG1hdHJpeDtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBjb2x1bW4ubGVuZ3RoO1xyXG4gICAgY29uc3Qgcm93cyA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkoY29sdW1ucyk7XHJcbiAgICBsZXQgY29sdW1uSW5kZXg7XHJcbiAgICBsZXQgcmVzdWx0Q29sdW1uSW5kZXg7XHJcbiAgICBsZXQgcm93SW5kZXg7XHJcbiAgICBmb3IgKHJlc3VsdENvbHVtbkluZGV4ID0gMCwgY29sdW1uSW5kZXggPSBjb2x1bW5zIC0gMTsgY29sdW1uSW5kZXggPj0gMDsgY29sdW1uSW5kZXgtLSwgcmVzdWx0Q29sdW1uSW5kZXgrKykge1xyXG4gICAgICAgIHJlc3VsdFtyZXN1bHRDb2x1bW5JbmRleF0gPSBuZXcgQXJyYXkocm93cyk7XHJcbiAgICAgICAgZm9yIChyb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgcm93czsgcm93SW5kZXgrKykge1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Q29sdW1uSW5kZXhdW3Jvd0luZGV4XSA9IG1hdHJpeFtyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNodW5rKGFycmF5LCBzaXplKSB7XHJcblxyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XHJcbiAgICBpZiAoIWxlbmd0aCB8fCBzaXplIDwgMSkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGxldCBpbmRleCA9IDAsXHJcbiAgICAgICAgcmVzSW5kZXggPSAwLFxyXG4gICAgICAgIHJlc3VsdCA9IEFycmF5KE1hdGguY2VpbChsZW5ndGggLyBzaXplKSk7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gYXJyYXkuc2xpY2UoaW5kZXgsIChpbmRleCArPSBzaXplKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTbmFrZU9yZGVyKGNvbHVtbnMsIHJvd3MpIHtcclxuICAgIGNvbnN0IGJhc2UgPSBBcnJheS5mcm9tKEFycmF5KGNvbHVtbnMgKiByb3dzKSwgKF8sIGkpID0+IGkpO1xyXG4gICAgY29uc3QgbWF0cml4ID0gY2h1bmsoYmFzZSwgY29sdW1ucyk7XHJcbiAgICBjb25zdCBiYmYgPSBtYXRyaXgubWFwKChhcnIsIGkpID0+IGkgJSAyID8gYXJyLnJldmVyc2UoKSA6IGFycik7XHJcbiAgICByZXR1cm4gYmJmLnJlZHVjZSgocmVzdWx0LCBhcnIpID0+IFsuLi5yZXN1bHQsIC4uLmFycl0sIFtdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3BpcmFsT3JkZXIoY29sdW1ucywgcm93cykge1xyXG4gICAgY29uc3QgYmFzZSA9IEFycmF5LmZyb20oQXJyYXkoY29sdW1ucyAqIHJvd3MpLCAoXywgaSkgPT4gaSk7XHJcbiAgICBjb25zdCBtYXRyaXggPSBjaHVuayhiYXNlLCBjb2x1bW5zKTtcclxuICAgIHJldHVybiBzcGlyYWwobWF0cml4LCBjb2x1bW5zLCByb3dzKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=