const ArrowSVG = () => {
    return (
        <>
            <svg width="0" height="0">
            <symbol fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="arrow-narrow-right-svgrepo-com">
                <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </symbol>
            </svg>
            <svg className="arrow_SVG">
            <use href="#arrow-narrow-right-svgrepo-com"></use>
            </svg>
        </>
    );
}
 
export default ArrowSVG;