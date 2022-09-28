import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Forms from "./views/Forms.vue";
import Tables from "./views/Tables.vue";
import UIElements from "./views/UIElements.vue";
import Login from "./views/Login.vue";
import Modal from "./views/Modal.vue";
import Card from "./views/Card.vue";
import Initiator from "./views/Initiator.vue";
import Home from "./views/Home.vue";
import Receiver from "./views/Receiver.vue";
import checkTax from "./views/checkTax.vue";
import invoiceProcessor from "./views/invoiceProcessor.vue";
import NotFound from "./views/NotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/NewInvoice",
    name: "NewInvoice",
    component: Initiator,
  },
  {
    path: "/NewInvoiceReceiver",
    name: "NewInvoiceReceiver",
    component: Receiver,
  },
  {
    path: "/checkTax",
    name: "checkTax",
    component: checkTax,
  },
  {
    path: "/invoiceProcessor",
    name: "invoiceProcessor",
    component: invoiceProcessor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
