<template>
  <div class="page">
    <sub-header :title="title" />
    <display-data
      :request="`${this.baseUrl}/${this.name}/popular?api_key=${this.apiKey}`"
    />
  </div>
</template>

<script>
import SubHeader from "@/components/Global/SubHeader.vue";
import DisplayData from "@/components/Global/DisplayData.vue";
import { mapState } from "vuex";

export default {
  components: { SubHeader, DisplayData },
  data() {
    return {
      name: "movie",
      title: "Movies",
    };
  },
  computed: {
    ...mapState(["baseUrl", "apiKey"]),
  },
};
</script>
