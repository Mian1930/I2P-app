<template>
   <!-- Start: Section three -->
          <div class="text-lg font-semibold border mt-4 plx-15">
            <div class="row">
                <div class="col-12">
                   <div class="row">
                       <div class="col-12">
                          <h2 class="table-title text-xl font-semibold leading-tight text-gray-700">PO Details</h2>
                           <div class="row mt-2">
                              <div class="col-12">
                                <button class="px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500">
                                  DELETE ROWS
                                </button>
                                <button class="btn-blue ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                  ADD GRN
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
                                        
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Item #
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        PO Number
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        GRN No
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        GRN Quantity
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        GRN Amount
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Consumed Quantity
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Invoice Qty
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Invoice Amount
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Currency
                                        </th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="hover:bg-gray-200" >
                                        <td class="px-6 py-4 text-lg text-gray-700 border-b">
                                        1  <label>
                                              <input
                                              type="checkbox"
                                              class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                              name="radio"
                                              />
                                          </label>
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
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        Text
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
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        Text
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        Text
                                        </td>
                                        
                                    </tr>
                                     <tr class="hover:bg-gray-200" >
                                        <td class="px-6 py-4 text-lg text-gray-700 border-b">
                                        2  <label>
                                              <input
                                              type="checkbox"
                                              class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                              name="radio"
                                              />
                                          </label>
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
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        Text
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
          <!-- End: Section three -->
</template>
<script>
import Datepicker from "vue3-datepicker";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name:"RecvSecThree",
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