import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const mainModule = {
  state: {
    main: {
      shopActive: false,
      name: "",
      eventDate: "",
      countrySelected: "",
      backgroundTypeSelected: "",
      shopStyleSelected: "",
      widgetSizeSelected: "",
      backgroundColor: "",
      banner: {},
      bottomBanner: {},
      topBanner: {},
      timerInMinutes: 15,
      isNameInTitleDisplay: false,
      isShowConformationPage: false,
    },
  },
  mutations: {
    updateShopActive(state, isShopActive) {
      state.main.shopActive = isShopActive;
    },
    updateName(state, name) {
      state.main.name = name;
    },
    updateEventDate(state, date) {
      state.main.eventDate = date;
    },
    updateCountrySelected(state, countrySelected) {
      state.main.countrySelected = countrySelected;
    },
    updateBackgroundTypeSelected(state, backgroundTypeSelected) {
      state.main.backgroundTypeSelected = backgroundTypeSelected;
    },
    updateShopStyleSelected(state, shopStyleSelected) {
      state.main.shopStyleSelected = shopStyleSelected;
    },
    updateWidgetSizeSelected(state, widgetSizeSelected) {
      state.main.widgetSizeSelected = widgetSizeSelected;
    },
    updateBackgroundColor(state, backgroundColor) {
      state.main.backgroundColor = backgroundColor;
    },
    updateBanner(state, banner) {
      state.main.banner = banner;
    },
    updateBottomBanner(state, bottomBanner) {
      state.main.bottomBanner = bottomBanner;
    },
    updateTopBanner(state, topBanner) {
      state.main.topBanner = topBanner;
    },
    updateTimerInMinutes(state, timerInMinutes) {
      state.main.timerInMinutes = timerInMinutes;
    },
    updateIsNameInTitleDisplay(state, isNameInTitleDisplay) {
      state.main.isNameInTitleDisplay = isNameInTitleDisplay;
    },
    updateIsShowConformationPage(state, isShowConformationPage) {
      state.main.isShowConformationPage = isShowConformationPage;
    },
  },
  actions: {},
  modules: {},
};

const seoModule = {
  state: {
    seo: {
      shopDescriptionForGoogle: "",
      googleKey: "",
      facebookPixel: "",
      googleTagKey: "",
      titleFacebook: "",
      descriptionFacebook: "",
      imageFacebook: {},
      tittleTwitter: "",
      descriptionsTwitter: "",
      imageTwitter: {},
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default new Vuex.Store({
  modules: {
    main: mainModule,
    seo: seoModule,
  },
});
