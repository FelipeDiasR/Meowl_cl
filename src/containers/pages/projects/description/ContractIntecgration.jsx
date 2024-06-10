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

// Outras funções de interação com o contrato podem ser adicionadas aqui
