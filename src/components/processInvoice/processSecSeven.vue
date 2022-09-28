<template>
    <!-- Start: Section six -->
         <div class="text-lg font-semibold border mt-4 plx-15">
            
            <!-- Start: Row first -->
            <div class="row">
                       <div class="col-8">
                           <div class="form-group amount">
                                <button class="ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform grey-btn rounded-md">
                                  Balance: 200.00
                                </button>
                                <button class="pl-3 ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform orange-btn rounded-md">
                                  Credit: 146000
                                </button>
                                <button class="pl-3 ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">
                                  GRN Total: 148000
                                </button>
                            </div>
                       </div>
            </div>
            <div class="row ">
              <div class="col-12">
                          <div class="form-group">
                              <label class="font-12"  for="exampleDropdownFormEmail1">Comments:</label>
                              <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                              <textarea class="display-block border width-100 border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"></textarea>
                          </div>
                      </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button class="px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500">
                  CANCEL
                </button>
            
                <button class="ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-black-500 focus:outline-none focus:bg-black-500">
                  RETURN TO TAX TEAM
                </button>
            
                <button class="btn-blue ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  PROCEED
                </button>
              </div>
            </div>

          </div>
          <!-- End: Section six -->
</template>
<script>
import Datepicker from "vue3-datepicker";
import { defineComponent, ref } from "vue";


export default defineComponent({
    name:"processSecSeven",
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
.grey-btn{
    background: grey;
    color: white;
}
.orange-btn{
    background: orange;
    color: white;
}
</style>