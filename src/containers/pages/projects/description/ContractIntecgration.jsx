// contractInteraction.js
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import { ContractFundingABI, ContractFundingAddress, ContractStableABI, ContractStableAddress, ContractTokenABI, ContractTokenAddress } from '../../../../Abi';
// Função para ler o parâmetro da estrutura fundraising
export async function getFundraising(provider) {
    try {
        const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
        const fundraising = await contract.fundraising();
        return fundraising;
    } catch (error) {
        console.error("Error reading fundraising:", error);
        return null;
    }
}
export async function getBalancesStablecoin(provider){
    try{
        const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
        const stableBalance = await contract.getBalanceStablecoin();
        return stableBalance;
    }catch (error) {
        console.error("error reading the stableBalance:", error);
        return null;
    }

};

export async function getContractActivation(provider){
    try{
        const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
        const isActived = await contract.isContractActived();
        return isActived;
    }catch (error) {
        console.error("error reading the stableBalance:", error);
        return null;
    }

};

export async function getPromotionActivation(provider){
    try{
        const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
        const isPromotionActived = await contract.isPromotionActived();
        return isPromotionActived;
    }catch (error) {
        console.error("error reading the stableBalance:", error);
        return null;
    }

};
export async function getTgeActivation(provider){
    try{
        const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
        const isTgeActived = await contract.isTgeActivated();
        return isTgeActived;
    }catch (error) {
        console.error("error reading the stableBalance:", error);
        return null;
    }

};
export async function getTgePercentage(provider){
    try{
        const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
        const TgePercentage = await contract.tgePercentage();
        return TgePercentage;
    }catch (error) {
        console.error("error reading the stableBalance:", error);
        return null;
    }

};


// Função para verificar se um usuário está inscrito na waitlist
export const checkWaitlistStatus = async (account, fundingAbi, contractAddress) => {
    if (!account) {
      throw new Error("Account is not available");
    }
  
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, fundingAbi, provider);
      const isSubscribed = await contract.waitlist(account); // Use o endereço da conta
      return isSubscribed;
    } catch (error) {
      console.error("Error checking waitlist status:", error);
      throw error;
    }
  };

  
