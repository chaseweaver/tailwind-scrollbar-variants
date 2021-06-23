const plugin = require("tailwindcss/plugin");
const _ = require("lodash");

module.exports = plugin(({ addUtilities, addVariant, e }) => {
  // Added scrollbar variant
  addVariant("scrollbar", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`scrollbar${separator}${className}`)}::-webkit-scrollbar`;
    });
  });

  // Added scrollbar button variant
  addVariant("scrollbar-button", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `scrollbar-button${separator}${className}`
      )}::-webkit-scrollbar-button`;
    });
  });

  // Added scrollbar thumb variant
  addVariant("scrollbar-thumb", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `scrollbar-thumb${separator}${className}`
      )}::-webkit-scrollbar-thumb`;
    });
  });

  // Added scrollbar track variant
  addVariant("scrollbar-track", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `scrollbar-track${separator}${className}`
      )}::-webkit-scrollbar-track`;
    });
  });

  // Added scrollbar track piece variant
  addVariant("scrollbar-track-piece", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `scrollbar-track-piece${separator}${className}`
      )}::-webkit-scrollbar-track-piece`;
    });
  });

  // Added scrollbar corner variant
  addVariant("scrollbar-corner", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `scrollbar-corner${separator}${className}`
      )}::-webkit-scrollbar-corner`;
    });
  });

  // Added scrollbar resizer variant
  addVariant("scrollbar-resizer", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `scrollbar-resizer${separator}${className}`
      )}::-webkit-resizer`;
    });
  });

  // Add scrollbar width
  addUtilities(
    _.map(
      ["auto", "inherit", "initial", "none", "revert", "thin", "unset"],
      value => {
        return {
          [`.${e(`scrollbar-width-${value}`)}`]: {
            "scrollbar-width": value
          }
        };
      }
    )
  );

  // Add overflow overlay
  addUtilities({
    ".overflow-overlay": {
      "overflow-x": "overlay",
      "overflow-y": "overlay"
    },
    ".overflow-x-overlay": {
      "overflow-x": "overlay"
    },
    ".overflow-y-overlay": {
      "overflow-y": "overlay"
    }
  });

  // Add scrollbar class
  addUtilities({
    ".scrollbar-rounded": {
      "&::-webkit-scrollbar": {
        "scrollbar-width": "thin",
        width: "14px",
        height: "14px"
      },
      "&::-webkit-scrollbar-thumb": {
        "--tw-bg-opacity": "0.2",
        "--tw-shadow": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        height: "6px",
        "border-width": "4px",
        "border-radius": "7px",
        "border-style": "solid",
        "border-color": "transparent",
        "background-clip": "padding-box",
        "background-color": "rgba(0, 0, 0, var(--tw-bg-opacity))",
        "@media (prefers-color-scheme: dark)": {
          "background-color": "rgba(255, 255, 255, var(--tw-bg-opacity))"
        },
        "box-shadow":
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      },
      "&::-webkit-scrollbar-button": {
        width: "0px",
        height: "0px",
        display: "none"
      },
      "&::-webkit-scrollbar-corner": {
        "background-color": "transparent"
      }
    }
  });
});
