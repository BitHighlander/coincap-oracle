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



        </q-toolbar-title>





        <div>

          Powered by Zap.org and Quasar v{{ $q.version }}
        </div>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-toolbar>

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
    title: 'Discord Channel',
    caption: 'https://discord.gg/PfcecUPbUH',
    icon: 'chat',
    link: 'https://discord.gg/PfcecUPbUH'
  },
  {
    title: 'Medium',
    caption: 'https://medium.com/@oracles.cc',
    icon: 'record_voice_over',
    link: 'https://medium.com/@oracles.cc'
  },
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
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

