import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '2455eac5fb1b40b989723da87b50afb9'
    }
})