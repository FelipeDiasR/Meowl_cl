import { useState, useContext } from 'react';
import { LuAlertCircle } from "react-icons/lu";
import { MdClose } from "react-icons/md"; // Adicionando um ícone de fechar
import { ThemeContext } from '../../../../components/themecontext/ThemeContext';
import './headerproject.css';

const HeaderProject = () => {
    const { isLigmode } = useContext(ThemeContext);
    const [isAlertVisible, setIsAlertVisible] = useState(true); // Estado para controlar a visibilidade do alerta

    const handleAlertClose = () => {
        setIsAlertVisible(false);  
    };

    return (
        <div className={`meowl_HeaderProject ${isLigmode ? 'lightmode' : ''}`}>
            <div className='meowl_HeaderProject_container'>
                {isAlertVisible && (  // Renderiza o alerta apenas se isAlertVisible for true
                    <div className='meowl_HeaderProject_alert_container'>
                        <div className='meowl_HeaderProject_alert'>
                            <div className='meowl_HeaderProject_close'>
                                <MdClose className='meowl_HeaderProject_icon_close' onClick={handleAlertClose} />
                            </div>
                            <div className='meowl_HeaderProject_i'>
                                <LuAlertCircle className='meowl_HeaderProject_alert_icon' />
                                <h1 className='meowl_HeaderProject_alert_title'>Always make sure the URL is www.meowlverse.com</h1>
                            </div>
                            <p className='meowl_HeaderProject_message'>Be cautious of scam links.</p>
                        </div>
                    </div>
                )}
                <div className='meowl_HeaderProject_title_container'>
                    <div className='meowl_HeaderProject_title'>
                        <h1> Welcome to MeowlPad </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderProject;
