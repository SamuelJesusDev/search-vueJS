

import axios from "axios";

const api =axios.create({
    baseURL:'https://random-data-api.com/api/users/random_user?size=30'
});
export default api;