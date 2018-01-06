'use strict'

exports.__esModule = true

const _react = require('react')

const _react2 = _interopRequireDefault(_react)

const _Check = require('material-ui-icons/Check')

const _Check2 = _interopRequireDefault(_Check)

const _CheckBoxOutlineBlank = require('material-ui-icons/CheckBoxOutlineBlank')

const _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// import CheckedIcon from 'material-ui/svg-icons/navigation/check'
// import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank'
exports.default = {
  anchorOrigin: { vertical: 'top', horizontal: 'left' },
  autocompleteFilter: function autocompleteFilter (searchText, text) {
    if (!text || (typeof text !== 'string' && typeof text !== 'number')) return false
    if (typeof searchText !== 'string' && typeof searchText !== 'number') return false
    return (text + '').toLowerCase().includes(searchText.toLowerCase())
  },
  autocompleteStyle: {},
  canAutoPosition: true,
  checkPosition: '',
  checkedIcon: _react2.default.createElement(_Check2.default, { style: { top: 'calc(50% - 12px)' } }),
  children: [],
  disabled: false,
  elementHeight: 36,
  hintTextAutocomplete: 'Type something',
  keepSearchOnSelect: false,
  menuCloseButton: null,
  multiple: false,
  nb2show: 5,
  noMatchFound: 'No match found',
  noMatchFoundStyle: {},
  onAutoCompleteTyping: function onAutoCompleteTyping () {},
  onChange: function onChange () {},
  onMenuOpen: function onMenuOpen () {},
  onSelect: function onSelect () {},
  openImmediately: false,
  showAutocompleteThreshold: 10,
  unCheckedIcon: _react2.default.createElement(_CheckBoxOutlineBlank2.default, { style: { top: 'calc(50% - 12px)' } }),
  value: null,
}
module.exports = exports['default']
