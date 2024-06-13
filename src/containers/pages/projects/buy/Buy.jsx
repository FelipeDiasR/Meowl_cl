import './buy.css';







const Buy  = ({name, status,  open, ticker, closed, raising_on, 
  raising_in, smartcontractaddress, smartcontractabi, tottal_supply, 
  initial_supply, marketcap, claimed_on, vesting }) => {
  

  return ( 
    <div className='meow__buy section__padding'>
        <div className='meow__buy_pool'>
          <h1> Pool Details</h1>
          <h2> {status} </h2>
          <h3> Total Supply </h3>
          <p> {tottal_supply} </p>
          <h3>  Initial Supply </h3>
          <p> {initial_supply} </p>
          <h3> Market Cap </h3>
          <p> {marketcap} </p>

               
        </div>
        <div className='meow__buy_section'>
            <div className='meow__buy_text'>
            <h1> Buy </h1>
            <p> To be able to buy it you must have {raising_in} <br/> on {raising_on} </p> 
            </div>
          
          <div className='meow__buy_inputs'>
            <input className='meow_buy_input1' type='email' placeholder= {raising_in} />
            <input className='meow_buy_input2' type='email' placeholder= {ticker} />
            <button> Buy </button>
          </div>
        </div>
        <div className='meow__buy_distribution_seedetails'> 
            <h1> Distribution </h1>
            <h3> Distribution </h3> 
            <p> Claimed on {claimed_on} </p>    
            <h3> Vesting </h3>  
            <p> {vesting} </p> 
  
        </div>
        <div className='meow__buy_claim_section'> 
            <h1> Claim Section </h1>
            <h3> Claim TGE </h3> 
            <p> 100000 </p>
            <button> Claim TGE </button> 
            <h3> Claim Tokens </h3>    
            <p> Number of claims: 10 </p> 
            <p> Claim value: 155 MWOL </p>
            <p> Available in 30 days</p> 
            <button> Claim Tokens </button>
  
        </div>

    
    </div>
);
};

export default Buy ;