'use client'

import * as React from 'react';

import { IChildrenElement } from "@/types/types";

import '../style/globals.css';

export default function RootLayout({children}: IChildrenElement): JSX.Element {

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" as="font"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='use-credentials'/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap" rel="stylesheet" as="font"/>

        <link rel="apple-touch-icon" sizes="120x120" href="/static/img/logo/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/img/logo/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/img/logo/favicon-16x16.png"/>
        <link rel="manifest" href="/static/img/logo/site.webmanifest"/>
        <link rel="mask-icon" href="/static/img/logo/safari-pinned-tab.svg" color="#5bbad5"/>

        <meta name="yandex-verification" content="0d5bfffd9278c2ac" />
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        
        <title>Кибертека</title>
      </head>

      <body>
          {children}
      </body>
    </html>
  )
}
