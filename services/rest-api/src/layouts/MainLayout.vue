

<template>
  <q-layout view="lHh Lpr lFf">
    <!--   <style
          @font-face {
          font-family: oraclefont;
          src:oraclefont.woff);
        }></style>-->
    <q-header elevated>
      <q-toolbar>
        <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <!--        <img
                  alt="oracle-logo"
                  src="~icons/favicon-32x32.png"
                >-->
        <q-toolbar-title>

          <q-avatar>
            <img src="statics/oraclelogowhite.png">
          </q-avatar>

          ORACLES.CC

          <q-btn glossy rounded label="Get Zap" color="green" @click="alert = true" icon-right="offline_bolt" />
          <q-dialog v-model="alert" align="center"  style="min-width:450px;">
            <q-card style="min-width:450px;">
              <q-card-section>
                <div class="text-h6">Buy Zap on Uniswap</div>
              </q-card-section>

              <q-card-section>
                <iframe
                    src="https://app.uniswap.org/#/swap?outputCurrency=0x6781a0f84c7e9e846dcb84a9a5bd49333067b104"
                    height="660px"
                    width="100%"
                    style="
              border: 0;
              margin: 0 auto;
              display: block;
              border-radius: 10px;
              max-width: 800px;
              min-width: 300px;
            "
                    id="myId"
                />
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

        </q-toolbar-title>





        <div>
          Powered by Zap.org and Quasar v{{ $q.version }}
        </div>
      </q-toolbar>
    </q-header>

    <q-footer elevated>


      <q-toolbar>
        <q-toolbar-title>
          <q-btn

              color="deep-orange"
              glossy rounded label="Download Metamask"
              onClick="parent.open('https://metamask.io/download.html')"
              icon-right="pets"

          ></q-btn>

        </q-toolbar-title>

        <div>enterprise level oracle solutions</div>
      </q-toolbar>
    </q-footer>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
            header
            class="text-grey-8"
        >
          Helpful Resources
        </q-item-label>
        <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [


  {
    title: 'Zap',
    caption: 'Zap.org',
    icon: 'offline_bolt',
    link: 'https://zap.org'
  },
  {
    title: 'MetaMask',
    caption: 'Needed to use our platform.',
    icon: 'card_travel',
    link: 'https://metamask.io/'
  },
  {
    title: 'Oracle Documentation',
    caption: 'How to use our oracles.',
    icon: 'build',
    link: 'https://oracles.cc/docs/'
  }


];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      alert: false,
      open:false,
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

