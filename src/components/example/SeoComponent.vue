<template>
  <div class="tab__wrapper">
    <TabHeader>SEO required information about Ticket Shop</TabHeader>
    <TabBody>
      <div>
        <hk-label>Short Tickets Shop description for Google</hk-label>
        <hk-textarea
          v-model="dataSeo.shopDescriptionForGoogle"
          cols="40"
          :maxlength="295"
        />
      </div>
      <div>
        <hk-label>Google analyze key</hk-label>
        <textarea
          v-model="dataSeo.googleKey"
          name="analyticsKey"
          cols="40"
          rows="1"
        />
      </div>
      <div>
        <hk-label>Facebook pixel</hk-label>
        <textarea
          v-model="dataSeo.facebookPixel"
          name="facebookPixel"
          cols="40"
          rows="1"
        />
      </div>

      <div>
        <hk-label>Google Tag Manager key</hk-label>
        <textarea
          v-model="dataSeo.googleTagKey"
          name="managerKey"
          cols="40"
          rows="1"
        />
      </div>

      <div>
        <hk-label>General preview title(including facebook)</hk-label>
        <hk-textarea
          v-model="dataSeo.titleFacebook"
          cols="40"
          :maxlength="60"
        />
      </div>
      <div>
        <hk-label>General preview description(including facebook)</hk-label>
        <hk-textarea
          v-model="dataSeo.descriptionFacebook"
          cols="40"
          :maxlength="295"
        />
      </div>

      <div>
        <hk-label>Facebook preview image</hk-label>
        <div>
          <hk-image-uploader
            v-model="dataSeo.imageFacebook"
            name="facebookImage"
          />
        </div>
      </div>

      <div>
        <hk-label>Twitter preview title</hk-label>
        <hk-textarea
          v-model="dataSeo.tittleTwitter"
          cols="40"
          :maxlength="60"
        />
      </div>
      <div>
        <hk-label>Twitter preview description</hk-label>
        <hk-textarea
          v-model="dataSeo.descriptionsTwitter"
          cols="40"
          :maxlength="295"
        />
      </div>

      <div>
        <hk-label>Twitter preview image</hk-label>
        <div>
          <hk-image-uploader
            v-model="dataSeo.imageTwitter"
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
export default {
  components: {
    TabHeader,
    TabBody,
  },
  data: function () {
    return {
      dataSeo: this.$store.state.seo.seo,
    };
  },
};
</script>
