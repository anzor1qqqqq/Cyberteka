import '../style/globals.css';

export default function RootLayout({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='use-credentials'/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href='/static/img/logo/logo.png' type="image/x-icon"/>
        <title>Кибертека</title>
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}
