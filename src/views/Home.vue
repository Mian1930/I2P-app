<template>
  <h3 class="text-gray-700 text-3xl font-medium">Home Page</h3>
    <div class="mt-8">

      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize top-bar">
            Account settings
          </h2>

          <!-- Start: Section one -->
          <div class="text-lg font-semibold border mt-4 plx-15">
            <div class="row plx-15">
                <div class="col-8">
                   <div class="row">
                       <div class="col-3">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Status:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <select class="form-control" aria-label="Default select example">
                                <option selected>Select Status</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                       </div>
                       <div class="col-6">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Vendor:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <select class="form-control" aria-label="Default select example">
                                <option selected>Select Vendor</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                       </div>
                       <div class="col-3">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Role:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <select class="form-control" aria-label="Default select example">
                                <option selected>Select Role</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                       </div>
                       <div class="col-3">
                           <div class="form-group">
                               <a href="#" class="btn btn-blue btn-block" role="button">New Invoice</a>
                            </div>
                       </div>
                   </div>
                </div>
                <div class="col-4 border pt-5">
                    | Bulk Invoice Upload
                </div>
            </div>
          </div>
          <!-- End: Section one -->

          <!-- Start: Section two -->
          <div class="text-lg font-semibold border mt-4 plx-15">
            <div class="row">
                <div class="col-12">
                   <div class="row">
                       <div class="col-2">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">User:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <select class="form-control" aria-label="Default select example">
                                <option selected>Select Status</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                       </div>
                       <div class="col-2">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Submission Date:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <Datepicker v-model="date"/>
         
                            </div>
                       </div>
                       <div class="col-2">
                           <div class="form-group">
                                <label class="font-12" for="exampleDropdownFormEmail1">Submission End Date:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <Datepicker v-model="date"/>
         
                            </div>
                       </div>
                       <div class="col-2">
                           <div class="form-group">
                                <label class="font-12" for="exampleDropdownFormEmail1">Invoice Start Date:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <Datepicker v-model="date"/>
         
                            </div>
                       </div>
                       <div class="col-2">
                           <div class="form-group">
                                <label class="font-12" for="exampleDropdownFormEmail1">Invoice End Date:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <Datepicker v-model="date"/>
         
                            </div>
                       </div>
                       
                       
                       <div class="col-2">
                           <div class="form-group">
                               <label for="exampleDropdownFormEmail1"></label>
                               <a href="#" class="btn btn-blue btn-block" role="button">Search</a>
                            </div>
                       </div>
                   </div>
                </div>
            </div>
          </div>
          <!-- End: Section two -->

          <!-- Start: Section three -->
          <div class="text-lg font-semibold border mt-4 plx-15">
            <div class="row">
                <div class="col-12">
                   <div class="row">
                       <div class="col-4">
                           <div class="form-group">
                                <!-- <label class="font-12"  for="exampleDropdownFormEmail1">User:</label> -->
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <div class="flex items-center">
                                    <button
                                        @click="isOpen = true"
                                        class="text-gray-500 focus:outline-none lg:hidden"
                                    >
                                        <svg
                                        class="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M4 6H20M4 12H20M4 18H11"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        </svg>
                                    </button>

                                    <div class="relative width-100">
                                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                            <path
                                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            />
                                        </svg>
                                        </span>

                                        <input
                                        class="pl-10 pr-4 text-indigo-600 border-gray-200 rounded-md width-100 border"
                                        type="text"
                                        placeholder="Search"
                                        />
                                    </div>
                                    </div>
                            </div>
                       </div>
                       <div class="col-1">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1"></label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <label>
                                    <input
                                    type="checkbox"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                    /><span class="ml-2 font-12">All</span>
                                </label>
         
                            </div>
                       </div>
                       <div class="col-1">
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
         
                            </div>
                       </div>
                       <div class="col-2">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1"></label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <label>
                                    <input
                                    type="checkbox"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                    /><span class="ml-2 font-12">Skip tax Team</span>
                                </label>
         
                            </div>
                       </div>
                       <div class="col-2">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1"></label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <label>
                                    <input
                                    type="checkbox"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                    /><span class="ml-2 font-12">Vendor Financing</span>
                                </label>
         
                            </div>
                       </div>
                       <div class="col-2">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1"></label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <label>
                                    <input
                                    type="checkbox"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                    /><span class="ml-2 font-12">Different Vendor</span>
                                </label>
         
                            </div>
                       </div>
                       
                       
                       
                       
                       
                       
                   </div>
                </div>
            </div>
          </div>
          <!-- End: Section three -->

          <!-- Start: Section four -->
          <div class="text-lg font-semibold border mt-4 plx-15">
            <div class="row">
                <div class="col-12">
                   <div class="row">
                       <div class="col-12">
                            <div class="mt-6">
                                <div class="my-6 overflow-hidden bg-white rounded-md shadow">
                                <table class="w-full text-left border-collapse">
                                    <thead class="border-b">
                                    <tr>
                                        <th
                                        class="px-2 py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Invoice No
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Vendor Code
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Vendor Name
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Submission Date
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Invoice Date
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Submitted by
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Invoice Amount
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Days to sales tax lapse
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Barcode No
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Status
                                        </th>
                                        <th
                                        class="py-3 text-gray-100 uppercase bg-black font-05"
                                        >
                                        Pending with 
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="hover:bg-gray-200" >
                                        <td class="px-6 py-4 text-lg text-gray-700 border-b">
                                        hhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-200" >
                                        <td class="px-6 py-4 text-lg text-gray-700 border-b">
                                        hhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-200" >
                                        <td class="px-6 py-4 text-lg text-gray-700 border-b">
                                        hhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
                                        </td>
                                        <td class="px-6 py-4 text-gray-500 border-b">
                                        hhhh
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

         
        </div>
      </div>
    </div>
</template>
<script>
import Datepicker from "vue3-datepicker";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      date: new Date(),
    };
  },
}
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
</style>