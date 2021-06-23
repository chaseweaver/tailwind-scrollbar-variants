const plugin = require("tailwindcss/plugin");
const _ = require("lodash");

module.exports = plugin.withOptions(options => {
  return ({ addUtilities, addVariant, e }) => {
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

    const buttonDisplay = options?.button?.display ?? "none";
    const buttonHeight = options?.button?.height ?? "0px";
    const buttonWidth = options?.button?.width ?? "0px";
    const cornerBgColor = options?.corner?.bgColor ?? "transparent";
    const scollbarHeight = options?.scrollbar?.height ?? "14px";
    const scrollbarScrollbarWidth =
      options?.scrollbar?.scrollbarWidth ?? "thin";
    const scrollbarWidth = options?.scrollbar?.width ?? "14px";
    let thumbBgOpacity = options?.thumb?.bgOpacity ?? "0.15";
    const thumbBorderColor = options?.thumb?.borderColor ?? "transparent";
    const thumbBorderRadius = options?.thumb?.borderRadius ?? "7px";
    const thumbBorderStyle = options?.thumb?.borderStyle ?? "solid";
    const thumbBorderWidth = options?.thumb?.borderWidth ?? "4px";
    const thumbHeight = options?.thumb?.height ?? "auto";
    const thumbWidth = options?.thumb?.width ?? "auto";

    if (typeof thumbBgOpacity !== "string") {
      thumbBgOpacity = thumbBgOpacity.toString();
    }

    // Add scrollbar class
    addUtilities({
      ".scrollbar-rounded": {
        "&::-webkit-scrollbar": {
          "scrollbar-width": scrollbarScrollbarWidth,
          height: scollbarHeight,
          width: scrollbarWidth
        },
        "&::-webkit-scrollbar-thumb": {
          "--tw-bg-opacity": `${thumbBgOpacity}`,
          "--tw-shadow": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
          height: thumbHeight,
          width: thumbWidth,
          "border-width": thumbBorderWidth,
          "border-radius": thumbBorderRadius,
          "border-style": thumbBorderStyle,
          "border-color": thumbBorderColor,
          "background-clip": "padding-box",
          "background-color": "rgba(0, 0, 0, var(--tw-bg-opacity))",
          "@media (prefers-color-scheme: dark)": {
            "background-color": "rgba(255, 255, 255, var(--tw-bg-opacity))"
          },
          "box-shadow":
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
        },
        "&::-webkit-scrollbar-button": {
          width: buttonWidth,
          height: buttonHeight,
          display: buttonDisplay
        },
        "&::-webkit-scrollbar-corner": {
          "background-color": cornerBgColor
        }
      }
    });
  };
});
