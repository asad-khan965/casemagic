// gtm.js
import TagManager from "react-gtm-module";
const gtmId = "GTM-NZSM89PR"; // Replace with your GTM ID

export const initializeTagManager = () => {
  TagManager.initialize({ gtmId });
};