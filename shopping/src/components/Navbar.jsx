import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate();
    // Nav 리스트
    const menuList = [  
                        '여성', 
                        'Divided',
                        '남성',
                        '신생아/유아',
                        '아동',
                        'H&M Home',
                        'Sale',
                        '지속가능성'
                    ]

    const search = (e) => {
        if(e.key === "Enter"){
            let keyword = e.target.value
            // url을 바꿔준다
            navigate(`/?q=${keyword}`);
        }
    }

    return ( 
        <div>
            <div >
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    <div onClick={()=>{
                        navigate('/login');
                    }}>로그인</div>
                </div>
            </div>
                
            <div className='nav-section'>
                <img width={100} 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png" alt="" />
            </div>

            <div className='menu-area'>
                    <ul className='menu-list'>
                        {
                            menuList.map((menu)=>(
                                <li key={menu}>{menu}</li>
                            ))
                        }
                    </ul>
                <div className='search-box'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input onKeyPress={(e)=>search(e)} type="text" placeholder='제품검색' />
                </div>
            </div>

        </div>
    );
}

export default Navbar;