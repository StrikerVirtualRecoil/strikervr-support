import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

function LogoImage({logo}) {
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  return (
    <div className="navbar__logo">
      <ThemedImage
        alt=""
        className={logo.className}
        height={logo.height}
        sources={sources}
        style={logo.style}
        width={logo.width}
      />
    </div>
  );
}

export default function NavbarLogo() {
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();

  return (
    <div className="navbar__brand navbar__brand--static">
      {logo && <LogoImage logo={logo} />}
      {navbarTitle != null && (
        <b className="navbar__title text--truncate">{navbarTitle}</b>
      )}
    </div>
  );
}
