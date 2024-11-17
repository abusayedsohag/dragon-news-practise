import logo from '../assets/logo.png'
import moment from 'moment'
import RunningNews from './RunningNews';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-14'>
            <img src={logo} alt="The Dragon News" /> <br />
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM Do YYYY')}</p>
            <br />
            <RunningNews></RunningNews>
        </div>
    );
};

export default Header;