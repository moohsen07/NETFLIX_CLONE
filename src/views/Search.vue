<template>
  <div class="search-page page">
    <div class="container-fluid">
      <h3 class="mb-3 text-capitalize">Search Related : {{ query }}</h3>
    </div>
    <display-data
      :request="`${this.baseUrl}/search/multi?api_key=${this.apiKey}&query=${this.query}`"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import DisplayData from "@/components/Global/DisplayData.vue";
export default {
  components: { DisplayData },
  data() {
    return {
      query: this.$route.query.q,
    };
  },
  computed: {
    ...mapState(["baseUrl", "baseImgUrl", "apiKey"]),
  },
};
</script>

<style></style>
