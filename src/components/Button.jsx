import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

import { buttonTypes, buttonVariants, buttonSizes } from './constants';

const Button = (props) => {
  const {
    text,
    isDisabled,
    type,
    size,
    backgroundColor,
    textColor,
    onClick,
    shadow,
    startIcon,
    endIcon,
  } = props;

  const shadows = shadow ? 'shadow' : '';
  const disabled = isDisabled ? 'disabled' : '';

  return (
    <button
      onClick={onClick}
      className={[
        'button',
        `${size}`,
        `${type}`,
        `${shadows}`,
        `${disabled}`,
        `bg-${backgroundColor}`,
        `text-${textColor}`,
      ].join(' ')}
      disabled={isDisabled}
      {...props}
    >
      {startIcon && (
        <span class="material-icons icon-start">local_grocery_store</span>
      )}
      {text}
      {endIcon && (
        <span class="material-icons icon-end">local_grocery_store</span>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.oneOf([
    buttonTypes.outline,
    buttonTypes.filled,
    buttonTypes.text,
  ]),
  variant: PropTypes.oneOf([buttonVariants.oval, buttonVariants.rectangular]),
  size: PropTypes.oneOf([
    buttonSizes.small,
    buttonSizes.medium,
    buttonSizes.large,
  ]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isDisabled: false,
  type: 'filled',
  variant: 'oval',
  size: 'medium',
  backgroundColor: 'transparent',
  textColor: 'white',
};

export { Button };
