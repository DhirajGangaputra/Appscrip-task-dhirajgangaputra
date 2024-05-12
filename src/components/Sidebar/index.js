import './index.css'

const Sidebar = () => {
    return(
        <div className='sidebar-container'>
            <div>
                <input type="checkbox" id="checkbox"/>
                <label htmlFor='checkbox'>CUSTOMIZABLE</label>
            </div>
            
            <hr/>
            <div className="filter-option">
                <div>
                    <h1 className='filter-option-heading'>IDEAL FOR</h1>
                    <p>All</p>
                </div>
                <select className='dropdown-option'>
                    <option>
                        <input type="checkbox" id="men"/>
                        <label htmlFor='men'>Men</label>
                    </option>
                    <option>
                        <input type="checkbox" id="women"/>
                        <label htmlFor='women'>Women</label>
                    </option>
                    <option>
                        <input type="checkbox" id="babynkids"/>
                        <label htmlFor='babynkids'>Baby & Kids</label>
                    </option>
                </select>
            </div>
            <hr/>

            <div className="filter-option">
                <div>
                    <h1 className='filter-option-heading'>OCCASION</h1>
                    <p>All</p>
                </div>
                <select className='dropdown-option'>
                    <option>
                        <input type="checkbox" id="men"/>
                        <label htmlFor='men'>Men</label>
                    </option>
                    <option>
                        <input type="checkbox" id="women"/>
                        <label htmlFor='women'>Women</label>
                    </option>
                    <option>
                        <input type="checkbox" id="babynkids"/>
                        <label htmlFor='babynkids'>Baby & Kids</label>
                    </option>
                </select>
            </div>
            <hr/>

            <div className="filter-option">
                <div>
                    <h1 className='filter-option-heading'>WORK</h1>
                    <p>All</p>
                </div>
                <select className='dropdown-option'>
                    <option>
                        <input type="checkbox" id="men"/>
                        <label htmlFor='men'>Men</label>
                    </option>
                    <option>
                        <input type="checkbox" id="women"/>
                        <label htmlFor='women'>Women</label>
                    </option>
                    <option>
                        <input type="checkbox" id="babynkids"/>
                        <label htmlFor='babynkids'>Baby & Kids</label>
                    </option>
                </select>
            </div>
            <hr/>

            <div className="filter-option">
                <div>
                    <h1 className='filter-option-heading'>FABRIC</h1>
                    <p>All</p>
                </div>
                <select className='dropdown-option'>
                    <option>
                        <input type="checkbox" id="men"/>
                        <label htmlFor='men'>Men</label>
                    </option>
                    <option>
                        <input type="checkbox" id="women"/>
                        <label htmlFor='women'>Women</label>
                    </option>
                    <option>
                        <input type="checkbox" id="babynkids"/>
                        <label htmlFor='babynkids'>Baby & Kids</label>
                    </option>
                </select>
            </div>
            <hr/>

            <div className="filter-option">
                <div>
                    <h1 className='filter-option-heading'>SEGMENT</h1>
                    <p>All</p>
                </div>
                <select className='dropdown-option'>
                    <option>
                        <input type="checkbox" id="men"/>
                        <label htmlFor='men'>Men</label>
                    </option>
                    <option>
                        <input type="checkbox" id="women"/>
                        <label htmlFor='women'>Women</label>
                    </option>
                    <option>
                        <input type="checkbox" id="babynkids"/>
                        <label htmlFor='babynkids'>Baby & Kids</label>
                    </option>
                </select>
            </div>
            <hr/>

            <div className="filter-option">
                <div>
                    <h1 className='filter-option-heading'>SUITABLE FOR</h1>
                    <p>All</p>
                </div>
                <select className='dropdown-option'>
                    <option>
                        <input type="checkbox" id="men"/>
                        <label htmlFor='men'>Men</label>
                    </option>
                    <option>
                        <input type="checkbox" id="women"/>
                        <label htmlFor='women'>Women</label>
                    </option>
                    <option>
                        <input type="checkbox" id="babynkids"/>
                        <label htmlFor='babynkids'>Baby & Kids</label>
                    </option>
                </select>
            </div>
            <hr/>
        </div>
    )
}
export default Sidebar