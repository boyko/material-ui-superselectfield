const _extends =
  Object.assign ||
  function (target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i]
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

import React, { cloneElement } from 'react'
import FloatingLabel from './FloatingLabel'
// import DropDownArrow from 'material-ui/svg-icons/navigation/arrow-drop-down'
import DropDownArrow from 'material-ui-icons/ArrowDropDown'
import { selectionsPresenterTypes } from './types'
import { selectionsPresenterDefaultProps } from './defaultProps'

const styles = {
  column: { display: 'flex', flexDirection: 'column', flex: 'auto' },
  row: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 'auto',
  },
  selections: { flex: 1 },
  underline: { position: 'relative', marginTop: 4 },
}

const SelectionsPresenter = function SelectionsPresenter (_ref) {
  let disabled = _ref.disabled,
    dropDownIcon = _ref.dropDownIcon,
    errorStyle = _ref.errorStyle,
    errorText = _ref.errorText,
    floatingLabel = _ref.floatingLabel,
    floatingLabelFocusStyle = _ref.floatingLabelFocusStyle,
    floatingLabelStyle = _ref.floatingLabelStyle,
    hintText = _ref.hintText,
    isFocused = _ref.isFocused,
    isOpen = _ref.isOpen,
    muiTheme = _ref.muiTheme,
    selectedValues = _ref.selectedValues,
    selectionsRenderer = _ref.selectionsRenderer,
    underlineErrorStyle = _ref.underlineErrorStyle,
    underlineFocusStyle = _ref.underlineFocusStyle,
    underlineStyle = _ref.underlineStyle
  let _muiTheme$textField = muiTheme.textField,
    floatingLabelColor = _muiTheme$textField.floatingLabelColor,
    borderColor = _muiTheme$textField.borderColor,
    focusColor = _muiTheme$textField.focusColor

  const isValidObject = function isValidObject (obj) {
    return (
      obj &&
      Object.prototype.toString.call(obj) === '[object Object]' &&
      Object.keys(obj).includes('value') &&
      obj.value !== null
    )
  }

  // Condition for shrinking the floating Label
  const isShrunk =
    (Array.isArray(selectedValues) && (!!selectedValues.length || isFocused)) ||
    (!Array.isArray(selectedValues) && (isValidObject(selectedValues) || (selectedValues === null && isFocused))) ||
    isOpen

  const baseHRstyle = _extends(
    {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      margin: 0,
      boxSizing: 'content-box',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: '1px solid',
      borderColor: borderColor,
    },
    underlineStyle,
    errorText ? _extends({ borderColor: 'red' }, underlineErrorStyle) : {}
  )

  const focusedHRstyle = disabled
    ? {}
    : errorText
      ? underlineStyle
      : _extends(
        {
          borderBottom: '2px solid',
          borderColor: isFocused || isOpen ? focusColor : borderColor,
          transition: '450ms cubic-bezier(0.23, 1, 0.32, 1)', // transitions.easeOut(),
          transform: 'scaleX( ' + (isFocused || isOpen ? 1 : 0) + ' )',
        },
        underlineFocusStyle
      )

  const arrowDownIcon = cloneElement(dropDownIcon || React.createElement(DropDownArrow, null), {
    style: {
      // fill: this.context.muiTheme.textField.borderColor,
      transform: 'rotate(' + (isOpen ? 180 : 0) + 'deg)',
    },
  })

  return React.createElement(
    'div',
    { style: styles.column },
    React.createElement(
      'div',
      { style: styles.row },
      React.createElement(
        'div',
        { style: styles.selections },
        floatingLabel &&
          React.createElement(
            FloatingLabel,
            {
              shrink: isShrunk,
              isFocused: isFocused,
              disabled: disabled,
              defaultColors: { floatingLabelColor: floatingLabelColor, focusColor: focusColor },
              floatingLabelStyle: floatingLabelStyle,
              floatingLabelFocusStyle: floatingLabelFocusStyle,
            },
            floatingLabel
          ),
        (!floatingLabel || isShrunk) && selectionsRenderer(selectedValues, hintText)
      ),
      arrowDownIcon
    ),
    React.createElement(
      'div',
      { style: styles.underline },
      React.createElement('hr', { style: baseHRstyle }),
      React.createElement('hr', { style: _extends({}, baseHRstyle, focusedHRstyle) })
    ),
    errorText &&
      React.createElement(
        'div',
        { style: _extends({ marginTop: 5, color: 'red', fontSize: 12 }, errorStyle) },
        errorText
      )
  )
}

SelectionsPresenter.propTypes = process.env.NODE_ENV !== 'production' ? selectionsPresenterTypes : {}
SelectionsPresenter.defaultProps = selectionsPresenterDefaultProps

export default SelectionsPresenter
