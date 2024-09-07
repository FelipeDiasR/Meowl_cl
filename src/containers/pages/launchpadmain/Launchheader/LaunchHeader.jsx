import { useState, useContext } from 'react';
import { LuAlertCircle } from "react-icons/lu";
import { MdClose } from "react-icons/md"; // Adicionando um ícone de fechar
import { ThemeContext } from '../../../../components/themecontext/ThemeContext';
import './launchheader.css';

const LaunchHeader = () => {
    const { isLigmode } = useContext(ThemeContext);
    const [isAlertVisible, setIsAlertVisible] = useState(true); // Estado para controlar a visibilidade do alerta

    const handleAlertClose = () => {
        setIsAlertVisible(false);  
    };

    return (
        <div className={`meowl_launchHeader ${isLigmode ? 'lightmode' : ''}`}>
            <div className='meowl_launchHeader_container'>
                {isAlertVisible && (  // Renderiza o alerta apenas se isAlertVisible for true
                    <div className='meowl_launchHeader_alert_container'>
                        <div className='meowl_launchHeader_alert'>
                            <div className='meowl_launchHeader_close'>
                                <MdClose className='meowl_launchHeader_icon_close' onClick={handleAlertClose} />
                            </div>
                            <div className='meowl_launchHeader_i'>
                                <LuAlertCircle className='meowl_launchHeader_alert_icon' />
                                <h1 className='meowl_launchHeader_alert_title'>Always make sure the URL is www.meowlverse.com</h1>
                            </div>
                            <p className='meowl_launchHeader_message'>Be cautious of scam links.</p>
                        </div>
                    </div>
                )}
                <div className='meowl_launchHeader_title_container'>
                    <div className='meowl_launchHeader_title'>
                        <h1> Welcome to MeowlPad </h1>
                    </div>
                </div>
                <div className='meowl-upcoming_titles'>
                    <h1> Upcoming projects </h1>
                    <p> Discover all the top projects launching on MeowlPad. </p>
                </div>
            </div>
        </div>
    );
};

export default LaunchHeader;
