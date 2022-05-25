import { atom } from "recoil";
const content =atom({
    key:'isAuthenticated',
    default:false
});
export {content};
