'use client'

import * as React from 'react';

import { GlobalContext } from "@/global/context";

import { TStateGlobal, IChildrenElement } from "@/types/types";

import '../style/globals.css';

export default function RootLayout({children}: IChildrenElement): JSX.Element {
  const [clubName, setClubName] = React.useState<TStateGlobal>(null);

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" as="font"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='use-credentials'/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap" rel="stylesheet" as="font"/>
        <link rel="shortcut icon" href='/static/img/logo/logo.png' type="image/x-icon"/>
        <title>Кибертека</title>
      </head>

      <body>
        <GlobalContext.Provider value={{
          clubName,
          setClubName
        }}>
          {children}
        </GlobalContext.Provider>
      </body>
    </html>
  )
}
