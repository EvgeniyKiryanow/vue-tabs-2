<template lang="html">
  <div class="wrapper">
    <div class="vue-store">
      <button @click="showStore">Save</button>
    </div>
    <tabs>
      <tab title="Seo">
        <SeoComponent />
      </tab>
      <tab title="Main">
        <MainComponent />
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from "../components/Tab.vue";
import Tabs from "../components/Tabs.vue";
import SeoComponent from "../components/example/SeoComponent";
import MainComponent from "../components/example/MainComponent";

export default {
  components: {
    Tab,
    Tabs,
    SeoComponent,
    MainComponent,
  },
  methods: {
    showStore() {
      console.log(this.$store.state.main, this.$store.state.seo);
    },
  },
};
</script>

<style lang="scss">
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  .col-6 {
    flex: 0 0 50%;
  }
  .col-4 {
    flex: 0 0 33%;
  }
}
.vue-store {
  display: flex;
  justify-content: flex-end;
  button {
    background: greenyellow;
    padding: 15px;
    outline: unset;
    border: unset;
    cursor: pointer;
  }
}
.tabs {
  &__header {
    display: flex;
    li {
      cursor: pointer;
    }
    & .tab__selected {
      background: dimgrey;
    }
    li {
      padding: 10px;
    }
  }
}
* {
  margin: 0;
  padding: 0;
  font-family: "Karla", sans-serif;
}
</style>
