const v1 = new Int32Array();
const v3 = new Int32Array(209);
function f4() {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        with ([-572867068,-935637352]) {
        }
    }
    new F5();
    return v3;
}
const v10 = [f4];
Reflect.apply(v1.toSorted, v3, v10);
gc();
