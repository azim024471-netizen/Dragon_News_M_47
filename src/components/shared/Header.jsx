import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className=' text-center py-7 space-y-4 '>
           <Image className='mx-auto' src={logo} width={400} height={300} alt='logo'></Image>

            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;