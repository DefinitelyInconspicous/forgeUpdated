import '../style.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Forge</title>
            <link rel="icon" href="favicon.ico" sizes="any"/>
        </head>
        <body className="bg-[#222] bg-fixed bg-cover">
                <div id="root">{children}</div>
            </body>
        </html>
    )
}