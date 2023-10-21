import { IChildrenElement } from "@/types/types";

const CharactBlockUI = ({children}: IChildrenElement) => {
    return (
        <div className="block_about_charact">
            <div className="block_about_charact-wrapper">
                {children}
            </div>
        </div>
    );
}
 
export default CharactBlockUI;