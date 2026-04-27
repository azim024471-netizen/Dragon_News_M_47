import NavBar from '@/components/shared/NavBar';


const layout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default layout;