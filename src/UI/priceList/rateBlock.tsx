import * as React from 'react';

const RateBlockUI = ({children, color}: {children: React.ReactNode, color: string}) => {
    const borderStyle = {
        border: `3px solid ${color}`,
    };

    return (
        <div className="block_about_charact">
            <div style={borderStyle} className="block_about_charact-wrapper">
                {children}
            </div>
        </div>
    );
}
 
export default RateBlockUI;