import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html>
            <header>
                <h1>My Website</h1>
                {/* Add navigation links here */}
            </header>
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

