import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
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
    main: {
      isShopActive: "",
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
      timerInMinutes: "",
      isNameInTitleDisplay: false,
      isShowConformationPage: false,
    },
  },
  mutations: {
    updateField,
  },
  actions: {},
  getters: {
    getField,
  },
  modules: {},
});
