<template>
  <h3 class="text-gray-700 text-3xl font-medium">Initiator Page</h3>
  <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize top-bar">
            Add New Invoice
          </h2>
          <!-- Start: Section one -->
          <div class="text-lg font-semibold border mt-4 plx-15">
            <!-- Start: Row first -->
            <div class="row">
                       <div class="col-3">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Submitter Role:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <select class="form-control" aria-label="Default select example">
                                <option selected>12P Initiator</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                       </div>
                       <div class="col-3">
                           <div class="form-group">
                                <label class="font-12 display-block"  for="exampleDropdownFormEmail1 ">PO / Non-PO:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <label>
                                  <input
                                    type="radio"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                  /><span class="ml-2 font-12">PO</span>
                                </label>
                                <label class="pl-2 ">
                                  <input
                                    type="radio"
                                    class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                    name="radio"
                                  /><span class="ml-2 font-12">Non-PO</span>
                                </label>
         
                            </div>
                       </div>
            </div>

          <!-- Start: Row second -->
          <div class="row">
                       <div class="col-3">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Invoice Number:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                  class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                  type="text"
                                  placeholder="302222"
                                />
                            </div>
                       </div>
                       <div class="col-3">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Invoice Date:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <Datepicker v-model="date"/>
         
                            </div>
                       </div>
                       <div class="col-3">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Invoice Description:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                  class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                  type="text"
                                  placeholder="Payment against project"
                                />
                            </div>
                       </div>
                       <div class="col-3">
                           <div class="form-group">
                                <label class="font-12"  for="exampleDropdownFormEmail1">Invoice Amount:</label>
                                <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                                <input
                                  class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                                  type="text"
                                  placeholder="PKR 45, 000"
                                />
                            </div>
                       </div>
            </div>

          
          <!-- Start: Row third -->
          <div class="row">
              <div class="col-3">
                  <div class="form-group">
                      <label class="font-12"  for="exampleDropdownFormEmail1">PO Number:</label>
                      <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                      <input
                        class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                        type="text"
                        placeholder="12314322"
                      />
                  </div>
              </div>
              <div class="col-3">
                  <div class="form-group">
                      <label class="font-12"  for="exampleDropdownFormEmail1">Vendor :</label>
                      <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                      <input
                        class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                        type="text"
                        placeholder="ABC (Pvt) Ltd."
                      />
                  </div>
              </div>
              <div class="col-3">
                  <div class="form-group">
                      <label class="font-12"  for="exampleDropdownFormEmail1">GRN No(s):</label>
                      <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                      <input
                        class="border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                        type="text"
                        placeholder="1223123123"
                      />
                  </div>
              </div>
              <div class="col-3">
                  <div class="form-group">
                      <label class="font-12"  for="exampleDropdownFormEmail1">IR User:</label>
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

          <!-- Start: Row fourth -->
          <div class="row">
                    <div class="col-3">
                        <div class="form-group">
                            <label class="font-12"  for="exampleDropdownFormEmail1">Attach Invoice:</label>
                            <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                            <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                </div>
                                <div class="custom-file">
                                  <input type="file" class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01">
                                  <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-group">
                            <label class="font-12"  for="exampleDropdownFormEmail1">Aditional Documents:</label>
                            <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                            <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                </div>
                                <div class="custom-file">
                                  <input type="file" class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01">
                                  <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>

          <!-- Start: Row five -->
          <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label class="font-12"  for="exampleDropdownFormEmail1">Comments:</label>
                            <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                            <textarea class="display-block border width-100 border w-full mt-2 border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"></textarea>
                        </div>
                    </div>
          </div>

          <!-- Start: Row six -->
          <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <!-- <label class="font-12"  for="exampleDropdownFormEmail1">Comments:</label> -->
                            <!-- <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"> -->
                            <label>
                                <input
                                type="checkbox"
                                class="w-5 h-5 text-blue-600 rounded-md focus:ring-blue-500"
                                name="radio"
                                /><span class="ml-2 font-12">I have verified invoice as per 
                                  <a @click="openPolicy = true" href="#" class="text-blue-600 hover:text-blue-900"
                                  >invoice checklist</a
                                ></span>
                            </label>
                             <div :class="`modal ${ !openPolicy && 'opacity-0 pointer-events-none' } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
                              <div @click="openPolicy = false" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

                              <div class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
                                <div class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
                                  <svg
                                    class="text-white fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                  >
                                    <path
                                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                                    />
                                  </svg>
                                  <span class="text-sm">(Esc)</span>
                                </div>

                                <!-- Add margin if you want to see some of the overlay behind the modal-->
                                <div class="px-6 py-4 text-left modal-content">
                                  <!--Title-->
                                  <div class="flex items-center justify-between pb-3">
                                    <p class="text-2xl font-bold"></p>
                                    <div class="z-50 cursor-pointer modal-close" @click="openPolicy = false">
                                      <svg
                                        class="text-black fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                      >
                                        <path
                                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                                        />
                                      </svg>
                                    </div>
                                  </div>

                                  <!--Body-->
                                  <p>Privacy Policy Text Here.</p>

                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
          </div>

          <!-- Start: Row seven buttons -->
          <div class="row">
            <div class="col-12">
              <button class="px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500">
                CANCEL
              </button>
            <!-- </div>
            <div class="pl-2 col-2"> -->
              <button class="ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">
                SAVE AS DRAFT
              </button>
            <!-- </div>
            <div class="col-1"> -->
              <button  @click="open = true" class="btn-blue ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                PROCEED
              </button>
            </div>
          </div>
          <div>

            <div :class="`modal ${ !open && 'opacity-0 pointer-events-none' } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
              <div @click="open = false" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

              <div class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
                <div class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
                  <svg
                    class="text-white fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    />
                  </svg>
                  <span class="text-sm">(Esc)</span>
                </div>

                <!-- Add margin if you want to see some of the overlay behind the modal-->
                <div class="px-6 py-4 text-left modal-content">
                  <!--Title-->
                  <div class="flex items-center justify-between pb-3">
                    <p class="text-2xl font-bold"></p>
                    <div class="z-50 cursor-pointer modal-close" @click="open = false">
                      <svg
                        class="text-black fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        />
                      </svg>
                    </div>
                  </div>

                  <!--Body-->
                  <p>Are you sure you want to create invoice with the provided details.</p>
                  <div class="row mt-4">
                    <div class="col-12">
                      <button @click="open = false" class="px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform transparent-btn rounded-md">
                        YES
                      </button>
                    <!-- </div>
                    <div class="pl-2 col-2"> -->
                      <button @click="open = false" class="ml-2 px-4 py-2 tracking-wide btn-blue text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        NO
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          </div>


        </div>
      </div>
  </div>
</template>
<script>
import Datepicker from "vue3-datepicker";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    Datepicker,
  },
  data() {
     const open = ref(false);
     const openPolicy = ref(false);
    return {
      date: new Date(),
      open,
      openPolicy,
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
.transparent-btn{
   border: 1px solid #0096DA !important;
    color: #0096DA !important;
    background: white !important;
}
.font-12{
    font-size: 12px;
    margin-bottom: -3px !important;
}
.font-05{
    font-size: 0.69rem !important;
}
.display-block{
  display: block !important;
}
</style>
