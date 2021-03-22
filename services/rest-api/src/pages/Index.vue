<template>

  <q-page class="flex flex-center">





    <img
            alt="geckologo"
            src="~assets/coingeckoimage.png"
    >
    <zap-bond-widget address="0x15A9c99F76245912b84046FE6aF39B9FB51Dcd38" endpoint="CoingeckoUSD"></zap-bond-widget>

    <textarea rows="10" cols="25">
      This oracle provides the USD value of any asset on CoinGecko and is ready to trigger smart contracts on the Ethereum blockchain.

      Enables the Creation of-
      -Futures Smart Contracts
      -Stable Coins
      -DEX operations
    </textarea>


  </q-page>

</template>

<script>



  import { ethers } from 'ethers'
  import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'PageIndex',
  components: {

  },
  data () {
    return {
      alert:false,
      coinGeckoOracle:"0xF02491e199565B9822ECf001eB6a336959D655C8",
      status:"online",
      accounts:"",
      slide: 'style',
      coingecko: 'CoinGecko is a cryptocurrency ranking website that gives a 360 degree overview of cryptocurrencies.',
      coincap: 'CoinCap keeps you up to date on the status of your crypto with real-time market data and tracking features. ',
      alethiometer: 'alethiometer measures general market consensus of an observed price. they are calculated using a number of data sources.'
    }
  },
  mounted: async function () {
    //this.showModal("BuyZap")


    //detect metamask
    const newAccounts = await ethereum.request({
      method: 'eth_requestAccounts',
    })
    console.log("metamask accounts: ",newAccounts)
    this.accounts = newAccounts.toString()

      try{
          const chainId = await ethereum.request({
              method: 'eth_chainId',
          })
          console.log("chainId: ",chainId)
          console.log("chainId: ",parseInt(chainId))
          if(parseInt(chainId) === 1){
              console.log("Mainnet: ")
              this.coinGeckoOracle = "0xF02491e199565B9822ECf001eB6a336959D655C8"
          } else {
              console.log("Testnet: ")
              this.coinGeckoOracle = "0x513846a568407ebd16bc29d238c364702963377d"
          }
          console.log("connected: ",ethereum.isConnected())

          ethereum.on('chainChanged', (chainId) => {
              console.log("chainId: ",chainId)
              if(chainId === '0'){
                  console.log("Mainnet: ")
                  this.coinGeckoOracle = "0xF02491e199565B9822ECf001eB6a336959D655C8"
              } else {
                  console.log("Testnet: ")
                  this.coinGeckoOracle = "0x513846a568407ebd16bc29d238c364702963377d"
              }
              // Handle the new chain.
              // Correctly handling chain changes can be complicated.
              // We recommend reloading the page unless you have good reason not to.
              //window.location.reload();
          });

          const permissions = await ethereum.request({
              method: 'wallet_getPermissions',
          })
          console.log("permissions: ",permissions)

          const chainInfo = await ethereum.request({
              method: 'wallet_getPermissions',
          })
          console.log("chainInfo: ",chainInfo)
      }catch(e){
        console.error(e)
      }


  },
  methods: {
    ...mapMutations(['showModal', 'hideModal']),
  },
}
</script>
