import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';

// ==============================
// 1. Type Definitions
// ==============================

type ButtonVariant = 'default' | 'primary' | 'destructive' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// ==============================
// 2. Styling Utilities
// ==============================

const buttonVariants: Record<ButtonVariant, ViewStyle> = {
  default: {
    backgroundColor: '#f4f4f5',
  },
  primary: {
    backgroundColor: '#18181b',
  },
  destructive: {
    backgroundColor: '#ef4444',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e4e4e7',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
};

const buttonSizes: Record<ButtonSize, ViewStyle> = {
  sm: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  md: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  lg: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
};

const textVariants: Record<ButtonVariant, TextStyle> = {
  default: { color: '#09090b' },
  primary: { color: '#ffffff' },
  destructive: { color: '#ffffff' },
  outline: { color: '#09090b' },
  ghost: { color: '#09090b' },
};

// ==============================
// 3. Button Component
// ==============================

const Button = ({
  variant = 'default',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  style,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        buttonVariants[variant],
        buttonSizes[size],
        disabled && styles.disabled,
        style,
      ]}
      activeOpacity={0.8}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={textVariants[variant].color} />
      ) : (
        <>
          {leftIcon && <div style={styles.iconWrapper}>{leftIcon}</div>}
          <Text style={[styles.text, textVariants[variant]]}>
            {children}
          </Text>
          {rightIcon && <div style={styles.iconWrapper}>{rightIcon}</div>}
        </>
      )}
    </TouchableOpacity>
  );
};

// ==============================
// 4. Base Styles
// ==============================

const styles = StyleSheet.create({
  base: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  iconWrapper: {
    marginRight: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;