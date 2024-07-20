import React, { useEffect } from 'react';
import MetaMaskIcon from '../../img/icons/Metamask.svg';
import './walletChose.css';

const WalletChoiceModal = ({ isOpen, onClose, onSelectWallet }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleClickOutside = (event) => {
    if (event.target.className === 'modal') {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleClickOutside}>
      <div className="modal-content">
        <button className='metamask_button' onClick={onSelectWallet}>
          <img src={MetaMaskIcon} alt="MetaMask" /> <h2>MetaMask</h2>
        </button>
      </div>
    </div>
  );
};

export default WalletChoiceModal;
