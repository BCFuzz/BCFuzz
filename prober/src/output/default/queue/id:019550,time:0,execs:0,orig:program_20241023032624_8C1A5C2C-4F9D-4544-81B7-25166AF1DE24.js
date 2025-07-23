const o0 = {
};
for (let v1 = 0; v1 < 5; v1++) {
    const v2 = v1++;
    const t4 = o0.__proto__;
    t4[536870912] = v2;
}
const v5 = new Int32Array(o0, o0, o0);
const v7 = new Int32Array(209);
function f8() {
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
        with ([-572867068,-935637352]) {
            for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
            }
        }
    }
    const v22 = new F9();
    return v22;
}
const v24 = [f8];
Reflect.apply(v5.toSorted, v7, v24);
gc();
