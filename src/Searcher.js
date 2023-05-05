import { BiSortAZ, BiSortZA } from "react-icons/bi";

const Searcher = ({ searchChange, az, za }) => {
    return (
        <div className='pa2 bg-lightest-blue'>
            <div className="absolute f1 ml3">
                <a href="#0" title="Ascending order" onClick={az} className="mr3"><BiSortAZ /></a>
                <a href="#0" title="Descending order" onClick={za}><BiSortZA /></a>
            </div>

            <input
                className='ba b--blue bg-light-green pa3 br3 w-20'
                type='search'
                placeholder='search contacts'
                onChange={searchChange}
            />
        </div>
    );
}

export default Searcher;
