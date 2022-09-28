<template>
  <h3 class="text-gray-700 text-3xl font-medium">Receiver Page</h3>
    <div class="mt-8">

      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize top-bar">
            Review/Approve Invoice
          </h2>

          <recv-sec-one />

          <recv-sec-two />
         
          <recv-sec-three />

         <recv-sec-four />

         
        </div>
      </div>
    </div>
</template>
<script>
import Datepicker from "vue3-datepicker";
import { defineComponent, ref } from "vue";
import RecvSecOne from "../components/Receiver/RecvSecOne.vue"
import RecvSecTwo from "../components/Receiver/RecvSecTwo.vue"
import RecvSecThree from "../components/Receiver/RecvSecThree.vue"
import RecvSecFour from "../components/Receiver/RecvSecFour.vue"

export default defineComponent({
  components: {
    Datepicker,
    RecvSecOne,
    RecvSecTwo,
    RecvSecThree,
    RecvSecFour
  },
  data() {
     const open = ref(false);
     const openPolicy = ref(false);
    return {
      date: new Date(),
      open,
      openPolicy
    };
  },
});
</script>
<style scoped>
.top-bar{
    padding: 15px;
    background: grey;
    color: white;
    border-radius: 5px;
}
.border{
    border: 1px solid grey !important;
}
.width-50{
    width: 50%;
    float: left;
}
.width-100{
    width: 100% !important;
}
.plx-15{
    padding: 15px;
}
.btn-blue{
    background: #0096DA;
    color: white;
}
.font-12{
    font-size: 12px;
    margin-bottom: -3px !important;
}
.font-05{
    font-size: 0.69rem !important;
}
.mb-TE{
  margin-bottom: -28px !important;
}
.table-title{
  border-left: 4px solid #0096DA;
    padding-left: 10px;
}
.amount{
  padding: 40px !important;
  background: lightgray;
}
</style>