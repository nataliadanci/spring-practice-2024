// Layout.tsx
import React, { ReactNode, useState } from 'react';
import { Footer } from './Footer';
import { InfoFooter } from './InfoFooter';
import { InfoHeader } from './InfoHeader';
import { GrayHeader } from './GrayHeader';
import { TitleHeader } from './TitleHeader';
import { Categories } from './CategoryPopover';
import { Search } from './Search';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [value, setValue] = useState<string>("");
    return (
        <div>
            <header>
                <GrayHeader/>
                <TitleHeader/>
                <Categories>
                    <div className="search-bar-container">
                    <Search onChange={setValue} />
                </div>
                </Categories>
                <InfoHeader/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <InfoFooter/>
                <Footer/>
            </footer>
        </div>
    );
};

export default Layout;
