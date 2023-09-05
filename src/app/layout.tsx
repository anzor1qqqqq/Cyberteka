
import '../style/globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <head>
        <title>Кибертека</title>
      </head>

      <body>

        <main className='flex bg-black'>{children}</main>

      </body>
    </html>
  )
}
