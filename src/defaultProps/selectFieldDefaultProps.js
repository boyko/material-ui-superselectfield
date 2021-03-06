import React from 'react'
// import CheckedIcon from 'material-ui/svg-icons/navigation/check'
// import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank'
import CheckedIcon from 'material-ui-icons/Check'
import UnCheckedIcon from 'material-ui-icons/CheckBoxOutlineBlank'

export default {
  anchorOrigin: { vertical: 'top', horizontal: 'left' },
  autocompleteFilter: (searchText, text) => {
    if (!text || (typeof text !== 'string' && typeof text !== 'number')) return false
    if (typeof searchText !== 'string' && typeof searchText !== 'number') return false
    return (text + '').toLowerCase().includes(searchText.toLowerCase())
  },
  autocompleteStyle: {},
  canAutoPosition: true,
  checkPosition: '',
  checkedIcon: <CheckedIcon style={{ top: 'calc(50% - 12px)' }} />,
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
  onAutoCompleteTyping: () => {},
  onChange: () => {},
  onMenuOpen: () => {},
  onSelect: () => {},
  openImmediately: false,
  showAutocompleteThreshold: 10,
  unCheckedIcon: <UnCheckedIcon style={{ top: 'calc(50% - 12px)' }} />,
  value: null,
}
