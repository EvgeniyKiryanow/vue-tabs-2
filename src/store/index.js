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
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    mainAllValuesInputs: (state) => {
      return state.main;
    },
  },
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
  getters: {
    seoAllValuesInputs: (state) => {
      return state.seo;
    },
  },
  modules: {},
};

export default new Vuex.Store({
  modules: {
    main: mainModule,
    seo: seoModule,
  },
});
