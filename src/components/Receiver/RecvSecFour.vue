<template>
   <!-- Start: Section four -->
          <div class="text-lg font-semibold border mt-4 plx-15">
            
            <!-- Start: Row first -->
            <div class="row">
                       <div class="col-3">
                           <div class="form-group amount">
                                <button class="ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">
                                  BALANCE: 148000
                                </button>
                            </div>
                       </div>
            </div>
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
            <div class="row">
              <div class="col-12">
                <button class="px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500">
                  CANCEL
                </button>
            
                <button class="ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-black-500 focus:outline-none focus:bg-black-500">
                  SEND TO BUYER
                </button>
                <button class="ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-black-500 focus:outline-none focus:bg-black-500">
                  SEND TO PR INITIATOR
                </button>
                <button class="ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-black-500 focus:outline-none focus:bg-black-500">
                  SEND TO INITIATOR
                </button>
                <button class="ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-black-500 focus:outline-none focus:bg-black-500">
                  DELETE INVOICE
                </button>
                <button class="ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-black-500 focus:outline-none focus:bg-black-500">
                  CHANGE IR
                </button>
            
                <button class="btn-blue ml-2 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  PROCEED
                </button>
              </div>
            </div>
          </div>
          <!-- End: Section four -->
</template>
<script>
import Datepicker from "vue3-datepicker";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name:"RecvFour",
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