<template>
  <div class="tab__wrapper">
    <TabHeader>
      Adjust the main settings here and check ‘Active’ to start your ticket
      shop</TabHeader
    >
    <TabBody>
      <div class="row">
        <div>
          <input v-model="isShopActive" type="checkbox" id="shop-active" />
          <label for="shop-active">Shop Active</label>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <hk-label required sign="*">Name</hk-label>
          <hk-input v-model="name" name="name-input" id="name-input" />
        </div>

        <div class="col-4">
          <hk-label>Event Data</hk-label>
          <hk-input-date
            value-type="format"
            format="YYYY-MM-DD"
            v-model="eventDate"
          ></hk-input-date>
        </div>

        <div class="col-4">
          <hk-label>Default Country</hk-label>
          <hk-select
            v-model="countrySelected"
            :options="countrySelectList"
            placeholder="FirstCountry"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <hk-label>Background type</hk-label>
          <hk-select
            :options="backgroundTypes"
            placeholder="Fill"
            v-model="backgroundTypeSelected"
          />
        </div>
        <div class="col-4">
          <hk-label required sign="* ">Shop Style</hk-label>
          <hk-select
            :options="shopStyleList"
            placeholder="Black"
            v-model="shopStyleSelected"
          />
        </div>
        <div class="col-4">
          <hk-label required sign="* ">Widget size</hk-label>
          <hk-select
            :options="widgetSize"
            placeholder="Sq"
            v-model="widgetSizeSelected"
          />
        </div>
      </div>

      <div class="row">
        <div>
          <hk-label for="background-color-input">Background color</hk-label>
          <hk-input
            v-model="backgroundColor"
            name="background-color-input"
            id="background-color-input"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <div>Banner first banner</div>
          <div>
            <hk-image-uploader name="banner" v-model="banner" />
          </div>
        </div>
        <div class="col-4">
          <hk-label>Banner second bottom</hk-label>
          <div>
            <hk-image-uploader name="banner-bottom" v-model="bottomBanner" />
          </div>
        </div>
        <div class="col-4">
          <hk-label>Banner third top</hk-label>
          <div>
            <hk-image-uploader name="banner-top" v-model="topBanner" />
          </div>
        </div>
      </div>

      <div class="row">
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
      </div>

      <div class="row">
        <div>
          <input
            v-model="isNameInTitleDisplay"
            type="checkbox"
            id="display-event"
          />
          <label for="display-event">Display event name in title</label>
        </div>
      </div>

      <div class="row">
        <div>
          <input
            v-model="isShowConformationPage"
            type="checkbox"
            id="show-order"
          />
          <label for="show-order">Show Order Conformation page</label>
        </div>
      </div>
    </TabBody>
  </div>
</template>
<script>
import TabHeader from "../inner-tab-component/TabHeader";
import TabBody from "../inner-tab-component/TabBody";
import { mapFields } from "vuex-map-fields";
export default {
  components: {
    TabHeader,
    TabBody,
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
  computed: {
    ...mapFields([
      "main.isShopActive",
      "main.name",
      "main.eventDate",
      "main.countrySelected",
      "main.backgroundTypeSelected",
      "main.shopStyleSelected",
      "main.widgetSizeSelected",
      "main.backgroundColor",
      "main.banner",
      "main.bottomBanner",
      "main.topBanner",
      "main.timerInMinutes",
      "main.isNameInTitleDisplay",
      "main.isShowConformationPage",
    ]),
  },
};
</script>
