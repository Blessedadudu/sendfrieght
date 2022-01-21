import { useState } from 'react';
import './Body.scss'
import { ImArrowLeft2 } from "react-icons/im";
import { MdAirplanemodeActive } from "react-icons/md";
import { RiShipFill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GiPoliceOfficerHead } from "react-icons/gi";

const Body = () => {
    const [data, setData] = useState([{
        quantity: "",
        length: "",
        weight: "",
        height: "",
        weight2: "",
    }])
    
    const [switcher, setSwitcher] = useState(false);
    const [switcher2, setSwitcher2] = useState(false);
    const [switcher3, setSwitcher3] = useState(false);
    const [switcher4, setSwitcher4] = useState(false);
    const [switcher5, setSwitcher5] = useState(false);
    const [color, setColor] = useState('a');

    const handleChangeSwitch = (num) => {
        if(num === 1) setSwitcher(prevState => !prevState);
        if(num === 2) setSwitcher2(prevState => !prevState);
        if(num === 3) setSwitcher3(prevState => !prevState);
        if(num === 4) setSwitcher4(prevState => !prevState);
        if(num === 5) setSwitcher5(prevState => !prevState);
        
        // change for color
        if(num === 'a') setColor(prevState => prevState = 'a');
        if(num === 'b') setColor(prevState => prevState = 'b');
        if(num === 'c') setColor(prevState => prevState = 'c');
        if(num === 'd') setColor(prevState => prevState = 'd');

    }


    const add = () => {
        const tempItem = [...data];  

        if(tempItem.length === 4) return;
        tempItem.push({
            quantity: "",
            length: "",
            weight: "",
            height: "",
            weight2: "",
        });
        setData(tempItem);
    };

    const remove = (i) => {
        const tempItem = [...data];
        if(tempItem.length === 1) return;
        tempItem.splice(i, 1);
        setData(tempItem);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const tempItems = [...data];
        tempItems[index][name] = value;
        setData(tempItems);
    };

    return (
    <div className='body'>
        <div className='heading--1'>
            <div className='go--back flex--2'>
                <ImArrowLeft2 className='icon' />
                <div>
                    <h1>New Booking</h1>
                    <p>Fill in the information below to get a quote or create a new booking</p>
                </div>
            </div>
        </div>
        <section className='section--1'>
            <p className='heading'>Select a service</p>
            <div className='card--container'>
                <div onClick={() => handleChangeSwitch('a')} className={`card pointer ${color === 'a' && 'card--state'}`}>
                    <p>Air Freight</p>
                    <MdAirplanemodeActive className='icon'/>
                </div>
                <div onClick={() => handleChangeSwitch('b')} className={`card pointer ${color === 'b' && 'card--state'}`}>
                    <p>Sea Freight</p>
                    <RiShipFill className='icon'/>
                </div>
                <div onClick={() => handleChangeSwitch('c')} className={`card pointer ${color === 'c' && 'card--state'}`}>
                    <p>Inland</p>
                    <p>(Truck & Barge)</p>
                    <FaTruck className='icon'/>
                </div>
                <div onClick={() => handleChangeSwitch('d')} className={`card pointer ${color === 'd' && 'card--state'}`}>
                    <p>Custom</p>
                    <p>Clerance</p>
                    <GiPoliceOfficerHead className='icon'/>
                </div>
            </div>
        </section>
        <section className='section--2'>
            <BiErrorCircle className='icon-error'/>
            <div className='row--1 flex--1'>
                <div className='p--double flex--2'>
                    <p>Import</p>
                    <p>Export</p>
                </div>
                <div className='map--search'>
                    <input maxLength={6} placeholder='From City or port'/>
                    <FaMapMarkerAlt className='icon'/>
                </div>
                <div className='map--search'>
                    <input maxLength={6} placeholder='To City or port'/>
                    <FaMapMarkerAlt className='icon'/>
                </div>
            </div>
            <div className='row--1 row--2 flex--1'>
                <div className='map--search'>
                    <input maxLength={6} placeholder='Readv Date'/>
                    <IoIosBriefcase className='icon'/>
                </div>
                <div className='map--search'>
                    <input maxLength={6} placeholder='Incoterms'/>
                    <AiOutlineCaretDown className='icon icon--2'/>
                </div>
                <div className='map--search'>
                    <input maxLength={6} placeholder='From City or port'/>
                </div>
            </div>
        </section>

        <section className='section--3'>
            <div className='header--cont flex--2'>
                <p className='heading'>Cargo Details</p>
                <div className='flex--2 switch--cont'>
                    <div className={`switch--1 pointer flex--2 ${switcher && 'active--switch'}`}>
                        <p className='dot pointer' onClick={() => handleChangeSwitch(1)}>&#183;</p> 
                    </div>
                    <p>Dangerous Cargo (ex. Chemicals, Battery)</p>
                </div>
            </div>
            <div className='switch--p2 flex--2'>
               <p className='wer'>Total Dimensions</p> 
               <p className='active'>Package Details</p> 
            </div>
            <p className='add--c pointer' onClick={add}>+ Add Cargo tem</p>
            {data.map((item, index) => (
                <div className='label--cont' key={index}>
                    <div className='label--input'>
                        <input maxLength={6} className={`${data[index].quantity?.length && 'inputFLoat'}`} id={`'input'${index}`} value={item.quantity}  name="quantity" onChange={(e) => handleChange(e, index)}/>
                        <label className={`${data[index].quantity?.length && 'addFloat'}`} htmlFor={`'input'${index}`}>Quantity</label>
                    </div>
                    <div className='label--input'>
                        <input maxLength={6} className={`${data[index].length?.length && 'inputFLoat'}`} id={`'input--2'${index}`} value={item.length}  name="length" onChange={(e) => handleChange(e, index)}/>
                        <label className={`${data[index].length?.length && 'addFloat'}`} htmlFor={`'input--2'${index}`}>L</label>
                        <span>CM</span>
                    </div>
                    <div className='label--input'>
                        <input maxLength={6} className={`${data[index].weight?.length && 'inputFLoat'}`} id={`'input--3'${index}`} value={item.weight}  name="weight" onChange={(e) => handleChange(e, index)}/>
                        <label className={`${data[index].weight?.length && 'addFloat'}`} htmlFor={`'input--3'${index}`}>W</label>
                        <span>CM</span>
                    </div>
                    <div className='label--input'>
                        <input maxLength={6} className={`${data[index].height?.length && 'inputFLoat'}`} id={`'input--4'${index}`} value={item.height}  name="height" onChange={(e) => handleChange(e, index)}/>
                        <label className={`${data[index].height?.length && 'addFloat'}`} htmlFor={`'input--4'${index}`}>H</label>
                        <span>CM</span>
                    </div>
                    <div className='label--input'>
                        <input maxLength={6} className={`${data[index].weight2?.length && 'inputFLoat'}`} id={`'input--5'${index}`} value={item.weight2}  name="weight2" onChange={(e) => handleChange(e, index)}/>
                        <label className={`${data[index].weight2?.length && 'addFloat'}`} htmlFor={`'input--5'${index}`}>Weight</label>
                        <span>Kg</span>
                    </div>
                    <span className='times' onClick={remove}>&times;</span>
                </div>
            ))}
        </section>

        <section className='section--4'>
            <p className='heading'>Additional Services</p>
            <div className='buttontext--cont '>
                <div className='text--switcher flex--1'>
                    <div className={`switch--p2 flex--2 ${switcher2 && 'active--switch'}`}>
                        <p className='dot pointer' onClick={() => handleChangeSwitch(2)}>&#183;</p> 
                    </div>
                    <div className='text--switch'>
                        <h4>Export Forwarding</h4>
                        <p>We handle customs clearance and documentation</p>
                    </div>
                </div>
                <div className='text--switcher flex--1'>
                    <div className={`switch--p2 flex--2 ${switcher3 && 'active--switch'}`}>
                        <p className='dot pointer' onClick={() => handleChangeSwitch(3)}>&#183;</p> 
                    </div>
                    <div className='text--switch'>
                        <h4>Import Customs Clearance</h4>
                        <p>We handle Import customs and regulatory requirements.</p>
                    </div>
                </div>
                <div className='text--switcher flex--1'>
                    <div className={`switch--p2 flex--2 ${switcher4 && 'active--switch'}`}>
                        <p className='dot pointer' onClick={() => handleChangeSwitch(4)}>&#183;</p> 
                    </div>
                    <div className='text--switch'>
                        <h4>Cargo Insurance</h4>
                        <p>Protect your cargo from logistics risks up to its full value</p>
                    </div>
                </div>
                <div className='text--switcher flex--1'>
                    <div className={`switch--p2 flex--2 ${switcher5 && 'active--switch'}`}>
                        <p className='dot pointer' onClick={() => handleChangeSwitch(5)}>&#183;</p> 
                    </div>
                    <div className='text--switch'>
                        <h4>Transport / Delivery</h4>
                        <p>We deliver the cargo to your door step from the ports</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='section--5'>
            <button>
                Continue
                <span><HiArrowNarrowRight/></span>
            </button>
        </section>

    </div>
    )
};

export default Body;
