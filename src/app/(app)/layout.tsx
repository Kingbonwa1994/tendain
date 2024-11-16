import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html>
            <head>
                <title>PtyNaTendani</title>
            </head>
            <body>
            <main>{children}</main>
            <footer>
                <p>© 2023 My Website</p>
            </footer>
            </body>
        </html>
    );
};

export default Layout;

