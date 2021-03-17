<template>
  <div class="q-pa-md">
    <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            control-color="primary"
            class="rounded-borders"
    >

      <q-carousel-slide name="style" class="column no-wrap">

        <div class="q-mt-md">
            <h3>Coin Gecko Datafeed</h3>
            <div width="50px" height="60px" style="width: 10%;">
                <q-img src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png"></q-img>
            </div>
<!--          -->
          {{ coingecko }}
            <br/>

            <zap-bond-widget address="0x15A9c99F76245912b84046FE6aF39B9FB51Dcd38" endpoint="CoingeckoUSD"></zap-bond-widget>


        </div>
      </q-carousel-slide>

    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
              glossy
              v-model="slide"
              :options="[
          { label: 1, value: 'style' },
          // { label: 2, value: 'tv' },
          // { label: 3, value: 'layers' },
        ]"
      ></q-btn-toggle>

          <div id="content" style="width: 100%;">
            Powered by :zap:
          <br />
            your metamask address: {{accounts}}
          </div>

    </div>
  </div>
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
      coinGeckoOracle:"",
      status:"online",
      accounts:"",
      slide: 'style',
      coincap: 'CoinCap keeps you up to date on the status of your crypto with real-time market data and tracking features. ',
      coingecko: 'CoinGecko is a cryptocurrency ranking website that gives a 360 degree overview of cryptocurrencies.',
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
