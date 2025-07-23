const v1 = new Int32Array();
const v3 = new Int32Array(209);
function f4() {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = [-572867068,-935637352];
        try { v7.forEach(); } catch (e) {}
        with (v7) {
        }
    }
    new F5();
    return F5;
}
const v11 = [f4];
Reflect.apply(v1.toSorted, v3, v11);
gc();
