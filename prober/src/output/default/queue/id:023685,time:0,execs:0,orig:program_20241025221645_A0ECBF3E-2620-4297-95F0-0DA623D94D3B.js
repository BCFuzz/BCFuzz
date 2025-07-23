function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    const o13 = {
        toString(a6, a7) {
            const v8 = this.__proto__;
            return v8.toLocaleString(9007199254740990, a7, v8, 9007199254740990).constructor.fromCharCode(9007199254740990)[0];
        },
    };
    return o13.toString();
}
F1.valueOf = f4;
function f15() {
    function F16() {
        if (!new.target) { throw 'must be called with new'; }
        const v20 = new SharedArrayBuffer();
        const v22 = new DataView(v20);
        v22.setBigInt64(536870887, F1);
    }
    new F16();
    return F16;
}
F1.toString = f15;
try { F1.toLocaleString(); } catch (e) {}
gc();
