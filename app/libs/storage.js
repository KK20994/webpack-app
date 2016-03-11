/**
 * Created by ask4kapil on 3/9/2016.
 */
export default {
    get(k) {
        try {
            return JSON.parse(localStorage.getItem(k));
        }
        catch(e) {
            return null;
        }
    },
    set(k, v) {
        localStorage.setItem(k, JSON.stringify(v));
    }
};