<template>
    <!-- Start: Section four -->
        <div class="text-lg font-semibold border mt-4 plx-15">
            <div class="row">
                <div class="col-7">
                    <process-invoice-detail />


                    <div class="row plx-15 mb-TE">
                        <div class="col-12">
                            <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1"></label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <label>
                                    <input
                                    type="checkbox"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                    /><span class="ml-2 font-12">Urgent</span>
                                </label>
                                <label class="pl-2">
                                    <input
                                    type="checkbox"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                    /><span class="ml-2 font-12">Skip Tax Team</span>
                                </label>
                                <label class="pl-2">
                                    <input
                                    type="checkbox"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                    /><span class="ml-2 font-12">Logistics Invoices</span>
                                </label>
                                <label class="pl-2">
                                    <input
                                    type="checkbox"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                    /><span class="ml-2 font-12">Vendor Financing Payment</span>
                                </label>
                                <label class="pl-2">
                                    <input
                                    type="checkbox"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                    /><span class="ml-2 font-12">Vedor Pre Payment</span>
                                </label>

                            </div>
                        </div>     

                    </div>

                    <div class="row plx-15 mb-TE">
                        <div class="col-5">
                            <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Invoice Number:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                type="text"
                                placeholder="12314322"
                                />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Invoice Date:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                type="text"
                                placeholder="01/01/2022"
                                />
                            </div>
                        </div>
                        
                        
                    </div>

                    <div class="row plx-15 mb-TE">
               
                        <div class="col-5">
                            <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Invoice Description:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                type="text"
                                placeholder="Payment aginst project"
                                />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Invoice Amount:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                type="text"
                                placeholder="PKR 45,000"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="row plx-15 mb-TE">
               
                        <div class="col-5">
                            <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">PO Number:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                type="text"
                                placeholder="Serv123123123ices"
                                />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Vendor:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                type="text"
                                placeholder="ABC (Pvt) Ltd."
                                />
                            </div>
                        </div>
                    </div>

                    <div class="row plx-15 mb-TE">
               
                        <div class="col-5">
                            <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Posting Date:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                type="text"
                                placeholder="01/01/2022"
                                />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Vendor:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <select class="form-control" aria-label="border Default select example">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                        </div>
                    </div>



                </div>
                <div class="col-5">
                    <process-preview />
                </div>
            </div>
        </div>
    <!-- End: Section four -->
</template>
<script>
import Datepicker from "vue3-datepicker";
import { defineComponent, ref } from "vue";
import processInvoiceDetail from "/src/components/processInvoice/processInvoiceDetail.vue"
import processPreview from "/src/components/processInvoice/processPreview.vue"


export default defineComponent({
    name:"processSecOne",
    components: {
        Datepicker,
        processInvoiceDetail,
        processPreview
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