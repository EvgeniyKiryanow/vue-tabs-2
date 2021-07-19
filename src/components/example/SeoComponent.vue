<template>
  <div class="tab__wrapper">
    <TabHeader>SEO required information about Ticket Shop</TabHeader>
    <TabBody>
      <div class="row">
        <div class="col-6">
          <hk-label>Short Tickets Shop description for Google</hk-label>
          <hk-textarea
            v-model="seoAllValuesInputs.shopDescriptionForGoogle"
            cols="40"
            :maxlength="295"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <hk-label>Google analyze key</hk-label>
          <textarea
            v-model="seoAllValuesInputs.googleKey"
            name="analyticsKey"
            cols="40"
            rows="1"
          />
        </div>
        <div class="col-6">
          <hk-label>Facebook pixel</hk-label>
          <textarea
            v-model="seoAllValuesInputs.facebookPixel"
            name="facebookPixel"
            cols="40"
            rows="1"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <hk-label>Google Tag Manager key</hk-label>
          <textarea
            v-model="seoAllValuesInputs.googleTagKey"
            name="managerKey"
            cols="40"
            rows="1"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <hk-label>General preview title(including facebook)</hk-label>
          <hk-textarea
            v-model="seoAllValuesInputs.titleFacebook"
            cols="40"
            :maxlength="60"
          />
        </div>
        <div class="col-6">
          <hk-label>General preview description(including facebook)</hk-label>
          <hk-textarea
            v-model="seoAllValuesInputs.descriptionFacebook"
            cols="40"
            :maxlength="295"
          />
        </div>
      </div>

      <div>
        <hk-label>Facebook preview image</hk-label>
        <div>
          <hk-image-uploader
            v-model="seoAllValuesInputs.imageFacebook"
            name="facebookImage"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <hk-label>Twitter preview title</hk-label>
          <hk-textarea
            v-model="seoAllValuesInputs.tittleTwitter"
            cols="40"
            :maxlength="60"
          />
        </div>
        <div class="col-6">
          <hk-label>Twitter preview description</hk-label>
          <hk-textarea
            v-model="seoAllValuesInputs.descriptionsTwitter"
            cols="40"
            :maxlength="295"
          />
        </div>
      </div>

      <div>
        <hk-label>Twitter preview image</hk-label>
        <div>
          <hk-image-uploader
            v-model="seoAllValuesInputs.imageTwitter"
            name="twitterImage"
          />
        </div>
      </div>
    </TabBody>
  </div>
</template>
<script>
import TabHeader from "../inner-tab-component/TabHeader";
import TabBody from "../inner-tab-component/TabBody";
import { mapGetters } from "vuex";
export default {
  components: {
    TabHeader,
    TabBody,
  },
  computed: {
    ...mapGetters(["seoAllValuesInputs"]),
  },
};
</script>
