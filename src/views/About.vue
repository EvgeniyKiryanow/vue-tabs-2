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
        <TabHeader>
          Adjust the main settings here and check ‘Active’ to start your ticket
          shop</TabHeader
        >
        <TabBody>
          <div>
            <input v-model="isShopActive" type="checkbox" id="shop-active" />
            <label for="shop-active">Shop Active</label>
          </div>

          <div>
            <hk-label required sign="*">Name</hk-label>
            <hk-input v-model="name" name="name-input" id="name-input" />
          </div>

          <div>
            <hk-label>Event Data</hk-label>
            <hk-input-date
              value-type="format"
              format="YYYY-MM-DD"
              v-model="eventDate"
            ></hk-input-date>
          </div>

          <div>
            <hk-label>Default Country</hk-label>
            <hk-select
              v-model="countrySelected"
              :options="countrySelectList"
              placeholder="FirstCountry"
            />
          </div>

          <div>
            <hk-label>Background type</hk-label>
            <hk-select
              :options="backgroundTypes"
              placeholder="Fill"
              v-model="backgroundTypeSelected"
            />
          </div>
          <div>
            <hk-label required sign="* ">Shop Style</hk-label>
            <hk-select
              :options="shopStyleList"
              placeholder="Black"
              v-model="shopStyleSelected"
            />
          </div>
          <div>
            <hk-label required sign="* ">Widget size</hk-label>
            <hk-select
              :options="widgetSize"
              placeholder="Sq"
              v-model="widgetSizeSelected"
            />
          </div>

          <div>
            <hk-label for="background-color-input">Background color</hk-label>
            <hk-input
              v-model="backgroundColor"
              name="background-color-input"
              id="background-color-input"
            />
          </div>

          <div>
            <div>Banner first banner</div>
            <div>
              <hk-image-uploader name="banner" v-model="banner" />
            </div>
          </div>
          <div>
            <hk-label>Banner second bottom</hk-label>
            <div>
              <hk-image-uploader name="banner-bottom" v-model="bottomBanner" />
            </div>
          </div>
          <div>
            <hk-label>Banner third top</hk-label>
            <div>
              <hk-image-uploader name="banner-top" v-model="topBanner" />
            </div>
          </div>

          <div>
            <hk-label for="timer-input">Checkout timer (in minutes)</hk-label>
            <hk-input
              v-model="timerInMinutes"
              name="timer-input"
              id="timer-input"
              required
            />
            <span>Default value 15 minutes</span>
          </div>

          <div>
            <input
              v-model="isNameInTitleDisplay"
              type="checkbox"
              id="display-event"
            />
            <label for="display-event">Display event name in title</label>
          </div>

          <div>
            <input
              v-model="isShowConformationPage"
              type="checkbox"
              id="show-order"
            />
            <label for="show-order">Show Order Conformation page</label>
          </div>
        </TabBody>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from "../components/Tab.vue";
import Tabs from "../components/Tabs.vue";
import TabHeader from "../components/inner-tab-component/TabHeader";
import TabBody from "../components/inner-tab-component/TabBody";
import SeoComponent from "../components/example/SeoComponent";

export default {
  components: {
    Tab,
    Tabs,
    TabHeader,
    TabBody,
    SeoComponent,
  },
  data: function () {
    return {
      files: [],
      countrySelectList: ["FirstCountry", "SecondCountry"],
      backgroundTypes: ["Fill", "RGBA"],
      shopStyleList: ["Black", "White"],
      widgetSize: ["sq", "sv"],
    };
  },
  methods: {
    showStore() {
      console.log(this.$store.state.main, this.$store.state.seo);
    },
  },
  computed: {
    isShopActive: {
      get() {
        return this.$store.state.main.main.shopActive;
      },
      set(isShopActive) {
        this.$store.commit("updateShopActive", isShopActive);
      },
    },
    name: {
      get() {
        return this.$store.state.main.main.name;
      },
      set(name) {
        this.$store.commit("updateName", name);
      },
    },
    eventDate: {
      get() {
        return this.$store.state.main.main.eventDate;
      },
      set(eventDate) {
        this.$store.commit("updateEventDate", eventDate);
      },
    },
    countrySelected: {
      get() {
        return this.$store.state.main.main.countrySelected;
      },
      set(countrySelected) {
        this.$store.commit("updateCountrySelected", countrySelected);
      },
    },
    backgroundTypeSelected: {
      get() {
        return this.$store.state.main.main.backgroundTypeSelected;
      },
      set(backgroundTypeSelected) {
        this.$store.commit(
          "updateBackgroundTypeSelected",
          backgroundTypeSelected
        );
      },
    },
    shopStyleSelected: {
      get() {
        return this.$store.state.main.main.shopStyleSelected;
      },
      set(shopStyleSelected) {
        this.$store.commit("updateShopStyleSelected", shopStyleSelected);
      },
    },
    widgetSizeSelected: {
      get() {
        return this.$store.state.main.main.widgetSizeSelected;
      },
      set(widgetSizeSelected) {
        this.$store.commit("updateWidgetSizeSelected", widgetSizeSelected);
      },
    },
    backgroundColor: {
      get() {
        return this.$store.state.main.main.backgroundColor;
      },
      set(backgroundColor) {
        this.$store.commit("updateBackgroundColor", backgroundColor);
      },
    },
    banner: {
      get() {
        return this.$store.state.main.main.banner;
      },
      set(banner) {
        this.$store.commit("updateBanner", banner);
      },
    },
    bottomBanner: {
      get() {
        return this.$store.state.main.main.bottomBanner;
      },
      set(bottomBanner) {
        this.$store.commit("updateBottomBanner", bottomBanner);
      },
    },
    topBanner: {
      get() {
        return this.$store.state.main.main.topBanner;
      },
      set(topBanner) {
        this.$store.commit("updateTopBanner", topBanner);
      },
    },
    timerInMinutes: {
      get() {
        return this.$store.state.main.main.timerInMinutes;
      },
      set(timerInMinutes) {
        this.$store.commit("updateTimerInMinutes", timerInMinutes);
      },
    },
    isNameInTitleDisplay: {
      get() {
        return this.$store.state.main.main.isNameInTitleDisplay;
      },
      set(isNameInTitleDisplay) {
        this.$store.commit("updateIsNameInTitleDisplay", isNameInTitleDisplay);
      },
    },
    isShowConformationPage: {
      get() {
        return this.$store.state.main.main.isShowConformationPage;
      },
      set(isShowConformationPage) {
        this.$store.commit(
          "updateIsShowConformationPage",
          isShowConformationPage
        );
      },
    },
  },
};
</script>

<style lang="scss">
.vue-store {
  display: flex;
  justify-content: flex-end;
  button {
    background: greenyellow;
    padding: 15px;
    outline: unset;
    border: unset;
  }
}
.tabs {
  &__header {
    display: flex;

    & .tab__selected {
      background: green;
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
