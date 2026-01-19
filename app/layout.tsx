import './globals.css'

export const metadata = {
  title: 'Tener - Web3 Growth Portfolio',
  description: 'Outcome-driven growth operator scaling Web3 projects from zero to traction.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
