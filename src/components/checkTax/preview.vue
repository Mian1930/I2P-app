<template>
     <h2 class="table-title text-xl font-semibold leading-tight text-gray-700">Attachment Preview</h2>
     <div class="border mt-2 preview-padding">
         <div class="flex items-center justify-center  bg-white">
        <div class="flex items-center my-3 ">    
          <svg width="201" height="200" viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M200.304 41.5903H171.558V0H57.4923L28.4397 25.0771V41.5903H0V178.594H78.5939L63.9155 200H135.78L121.101 178.594H200.002L200 41.5903H200.304ZM171.558 58.4099H183.179V162.081H171.558V58.4099ZM166.971 162.081H33.0238V29.3607H48.9259C55.3486 29.3607 60.5464 24.4681 60.5464 18.6578V4.58838H166.971L166.971 162.081ZM28.438 162.081H16.8175V58.4099H28.438V162.081ZM36.0843 24.7707L56.2683 7.34029V18.6561C56.2683 22.0207 53.21 24.7728 49.2344 24.7728L36.0843 24.7707ZM127.217 195.72H72.7836L84.4042 178.901H115.902L127.217 195.72ZM195.718 174.314H4.58454V46.1795H28.7445V53.8245H12.2313V166.667H187.464L187.462 53.8245H171.254V46.1795H195.414V174.314H195.718Z" fill="#C5C7CD"/>
<path d="M99.996 68.8069C73.6954 68.8069 52.2882 81.957 35.4707 103.059C52.2903 124.16 74.0026 137.31 99.996 137.31C126.297 137.31 147.704 124.16 164.521 103.059C147.702 81.957 125.989 68.8069 99.996 68.8069ZM123.238 96.023C123.238 108.561 112.84 118.653 99.996 118.653C87.1519 118.653 76.7537 108.561 76.7537 96.023C76.7537 83.4853 87.1519 73.3931 99.996 73.3931C112.84 73.3931 123.238 83.4853 123.238 96.023ZM158.712 103.057C142.81 122.017 122.015 132.721 99.9956 132.721C77.9786 132.721 57.1805 122.018 41.2793 103.057C52.5951 89.602 66.0499 80.427 81.0348 76.1451C75.531 81.0377 72.1662 88.0716 72.1662 96.023C72.1662 111.008 84.7039 123.241 99.9952 123.241C115.286 123.241 127.824 111.008 127.824 96.023C127.824 88.072 124.46 81.0382 118.956 76.1451C133.634 80.427 147.397 89.6016 158.711 103.057H158.712Z" fill="#C5C7CD"/>
<path d="M87.7646 96.0235C87.7646 102.751 93.2685 107.95 99.9976 107.95C106.725 107.95 112.231 102.446 112.231 96.0235C112.231 89.6008 106.727 84.0969 99.9976 84.0969C93.2685 84.0969 87.7646 89.296 87.7646 96.0235ZM107.643 96.0235C107.643 99.999 104.278 103.364 99.9976 103.364C95.7157 103.364 92.3526 99.9992 92.3526 96.0235C92.3526 92.0477 95.7172 88.6832 99.9976 88.6832C104.278 88.6848 107.643 91.7431 107.643 96.0235Z" fill="#C5C7CD"/>
<path d="M142.811 12.2343H156.265V16.8209H142.811V12.2343Z" fill="#C5C7CD"/>
<path d="M76.7559 24.7686H156.266V29.3552H76.7559V24.7686Z" fill="#C5C7CD"/>
<path d="M76.7559 41.5903H156.266V46.177H76.7559V41.5903Z" fill="#C5C7CD"/>
<path d="M41.2793 149.54H156.266V154.127H41.2793V149.54Z" fill="#C5C7CD"/>
<path d="M120.181 12.2343H133.636V16.8209H120.181V12.2343Z" fill="#C5C7CD"/>
</svg>

        </div>
      </div>
     </div>
            

          
</template>
<script>
import Datepicker from "vue3-datepicker";
import { defineComponent, ref } from "vue";



export default defineComponent({
    name:"preview",
    components: {
        Datepicker,
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
.preview-padding{
    padding: 235px 30px !important;
}
</style>