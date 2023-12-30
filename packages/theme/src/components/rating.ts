import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Rating: ComponentMultiStyle = {
  baseStyle: ({ colorScheme: c = "yellow" }) => ({
    container: {
      w: "max-content",
    },
    group: {
      position: "relative",
    },
    item: {
      cursor: "pointer",
      rounded: "sm",
      color: ["blackAlpha.300", "whiteAlpha.300"],
      outline: "none",
      _notLast: {
        position: "absolute",
        top: 0,
        left: 0,
      },
      _readOnly: {
        cursor: "default",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _filled: {
        color: [`${c}.500`, `${c}.600`],
      },
    },
    icon: {
      fill: "currentColor",
    },
  }),

  sizes: {
    xs: {
      icon: {
        fontSize: "md",
      },
    },
    sm: {
      icon: {
        fontSize: "lg",
      },
    },
    md: {
      icon: {
        fontSize: "xl",
      },
    },
    lg: {
      icon: {
        fontSize: "2xl",
      },
    },
    xl: {
      icon: {
        fontSize: "3xl",
      },
    },
  },

  defaultProps: {
    size: "md",
    colorScheme: "yellow",
  },
}
