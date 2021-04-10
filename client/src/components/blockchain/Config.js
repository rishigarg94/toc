import Portis from '@portis/web3';
import Web3 from 'web3';
import hackJson from './hack_abi.json'



const hack_addr = '0x6CbeAc25Ad16d26A84CA0fB52fA6BA3213b51560';
const portis = new Portis('2ad8a801-9c7e-43da-8916-96adf7022bcb', 'ropsten');
const web3 = new Web3( "http://127.0.0.1:8545");
const hack = new web3.eth.Contract(hackJson.hack_abi, hack_addr);



export { portis, web3, hack }