const antdThemeSeedToken = {
  colorPrimary: '#80bc00',
  colorLink: '#80bc00',
  borderRadius: 2,
};

const globalThemeToken = {
  colorPrimary: antdThemeSeedToken.colorPrimary,
  layoutHorizontalPadding: 16,
  layoutHeaderHeight: 54,
  layoutBcHeight: 32,
  layoutFooterHeight: 32,
  layoutCalcMinContentHeight: `calc(100vh - ${54 + 32 + 32}px)`,
  layoutContentPadding: 8,
  layoutAvatarSize: 24,
  layoutAvatarSizeLarge: 64,
  layoutAvatarFontSize: 18,
  minCardHeaderHeight: 35,
  animationDurationSlow: '0.3s',
  animationDurationBase: '0.2s',
  animationDurationFast: '0.1s',
  easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
};

export { antdThemeSeedToken, globalThemeToken };
