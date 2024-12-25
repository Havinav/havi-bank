import { faBars, faCreditCard, faGaugeHigh, faLeftRight, faMoneyBill, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [sideFlag, setSideFlag] = useState(false)
    const side = () => {
        setSideFlag(!sideFlag)
    }
    const sideClose = () => {
        setSideFlag(false)
    }
    return (
        <div className='flex items-center fixed w-full top-0 left-0 h-14 bg-pink-500 text-white justify-between'>
            <span className='text-xl font-bold'>Havi Bank &emsp;
                <span onClick={side} className='cursor-pointer'>
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </span>

            <Link to='/login'>
                <span className='mr-10'>
                    <FontAwesomeIcon icon={faRightToBracket} />&nbsp;Login
                </span>
            </Link>
            {
                sideFlag && <div className='bg-pink-400 text-white w-40 h-screen fixed top-14 left-0 text-center'>
                    <div className=''>
                        <br />
                        <div><b>
                            <Link to='dashboard' onClick={sideClose} className='cursor-pointer mr-5'><FontAwesomeIcon icon={faGaugeHigh} />&emsp;Dashboard</Link>
                        </b></div>
                        <br />
                        <div><b>
                            <Link to='transaction' onClick={sideClose} className='cursor-pointer mr-3 '><FontAwesomeIcon icon={faLeftRight} />&emsp;Transactions </Link>
                        </b> </div><br />
                        <div><b>
                            <Link to='tarnsfer' onClick={sideClose} className='cursor-pointer mr-9 '><FontAwesomeIcon icon={faMoneyBill} />&emsp;Transfer </Link>
                        </b> </div>
                        <br />

                        <div><b>
                            <Link to='cards' onClick={sideClose} className='cursor-pointer mr-14 '><FontAwesomeIcon icon={faCreditCard} />&emsp;Cards </Link>
                        </b> </div><br />
                        <div><b>
                            <Link to='user' onClick={sideClose} className='cursor-pointer mr-10'><FontAwesomeIcon icon={faUser} />&emsp;Account</Link>
                        </b></div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header