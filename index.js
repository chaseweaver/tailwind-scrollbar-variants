const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(() => ({ addUtilities, addVariant, e }) => {
  // Scrollbar
  addVariant("scrollbar", ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) =>
        `.${e(`scrollbar${separator}${className}`)}::-webkit-scrollbar`
    );
  });

  // Scrollbar button
  addVariant("scrollbar-button", ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) =>
        `.${e(
          `scrollbar-button${separator}${className}`
        )}::-webkit-scrollbar-button`
    );
  });

  // Scrollbar thumb
  addVariant("scrollbar-thumb", ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) =>
        `.${e(
          `scrollbar-thumb${separator}${className}`
        )}::-webkit-scrollbar-thumb`
    );
  });

  // Scrollbar track
  addVariant("scrollbar-track", ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) =>
        `.${e(
          `scrollbar-track${separator}${className}`
        )}::-webkit-scrollbar-track`
    );
  });

  // Scrollbar track piece
  addVariant("scrollbar-track-piece", ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) =>
        `.${e(
          `scrollbar-track-piece${separator}${className}`
        )}::-webkit-scrollbar-track-piece`
    );
  });

  // Scrollbar corner
  addVariant("scrollbar-corner", ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) =>
        `.${e(
          `scrollbar-corner${separator}${className}`
        )}::-webkit-scrollbar-corner`
    );
  });

  // Scrollbar resizer
  addVariant("scrollbar-resizer", ({ modifySelectors, separator }) => {
    modifySelectors(
      ({ className }) =>
        `.${e(`scrollbar-resizer${separator}${className}`)}::-webkit-resizer`
    );
  });

  // Scrollbar width
  addUtilities(
    ["auto", "inherit", "initial", "none", "revert", "thin", "unset"].map(
      (v) => ({
        [`.${e(`scrollbar-width-${v}`)}`]: {
          "scrollbar-width": value,
        },
      })
    )
  );

  // Overflow overlay
  addUtilities({
    ".overflow-overlay": {
      "overflow-x": "overlay",
      "overflow-y": "overlay",
    },
    ".overflow-x-overlay": {
      "overflow-x": "overlay",
    },
    ".overflow-y-overlay": {
      "overflow-y": "overlay",
    },
  });

  if (typeof thumbBgOpacity !== "string")
    thumbBgOpacity = thumbBgOpacity.toString();
});
