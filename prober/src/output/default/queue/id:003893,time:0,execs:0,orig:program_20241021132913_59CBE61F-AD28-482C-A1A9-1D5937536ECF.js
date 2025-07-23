const o2 = {
    "maxByteLength": 3606,
};
const v4 = new SharedArrayBuffer(2399, o2);
const v6 = new BigInt64Array(v4);
function f7() {
    return v4;
}
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function f14() {
        return a13;
    }
    class C15 extends f14 {
    }
    v6.d = f7;
    for (let [i19, i20] = (() => {
            const o17 = {
            };
            return [0, 10];
        })();
        i20++, i19 < i20;
        i20--) {
        i20--;
        for (let v29 = 0; v29 < 10; v29++) {
        }
    }
}
const v30 = new F8();
new F8(f7, v30, F8, f7);
gc();
