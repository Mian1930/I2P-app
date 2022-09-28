<template>
    <!-- Start: Section four -->
        <div class="text-lg font-semibold border mt-4 plx-15">
            <div class="row">
                <div class="col-7">
                    <invoice-detail />
                </div>
                <div class="col-5">
                    <preview />
                </div>
            </div>
        </div>
    <!-- End: Section four -->
</template>
<script>
import Datepicker from "vue3-datepicker";
import { defineComponent, ref } from "vue";
import invoiceDetail from "/src/components/checkTax/invoiceDetail.vue"
import preview from "/src/components/checkTax/preview.vue"


export default defineComponent({
    name:"taxSecFour",
    components: {
        Datepicker,
        invoiceDetail,
        preview
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