// contractInteraction.js

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
export async function isSubscribedToWaitlist(provider, address) {
    try {
        const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
        const isSubscribed = await contract.waitlist(address);
        return isSubscribed;
    } catch (error) {
        console.log("Error checking waitlist status:", error);
       
    }
}

console.warn = () => {};

