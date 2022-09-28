<template>
    <!-- Start: Section four -->
          <div class="text-lg font-semibold border mt-4 plx-15">
            <div class="row">
                <div class="col-12">
                   <div class="row">
                       <div class="col-12">
                          <!-- <h2 class="table-title text-xl font-semibold leading-tight text-gray-700">PO Details</h2> -->
                           <div class="row mt-2">
                              <div class="col-12">
                                <button class="btn-blue ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                  ADD ROW
                                </button>
                              </div>
                            </div>
                            <div class="mt-6">
                                <div class="my-6 overflow-hidden bg-white rounded-md shadow">
                                <table class="w-full text-left border-collapse">
                                    <thead class="border-b">
                                    <tr>
                                        <th
                                        class="px-2 py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Sr.
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Tax Type
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        WHT Code
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Base Amount
                                        </th>
                                        
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="hover:bg-gray-200" >
                                        <td class="px-6 py-4 text-lg text-gray-700 border-b">
                                        1
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        Text
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        Text
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        Text
                                        </td>
                                        
                                        
                                    </tr>
                                   
                                    </tbody>
                                </table>
                                </div>
                            </div>
                       </div>
          
                       
                   </div>
                </div>
            </div>

        

          </div>
          <!-- End: Section four -->
</template>
<script>
import Datepicker from "vue3-datepicker";
import { defineComponent, ref } from "vue";


export default defineComponent({
    name:"processSecFour",
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
</style>