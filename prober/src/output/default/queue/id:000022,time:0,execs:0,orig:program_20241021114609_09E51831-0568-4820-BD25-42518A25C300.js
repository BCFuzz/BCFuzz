function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 5770;
    this.h = 5770;
}
new F0();
const v4 = new F0();
const v5 = new F0();
[-5.0,F0,[-1.2729352502928637e+308,v4]];
[1.6108883737384262e+308,v5,-5.0,1.6108883737384262e+308];
new Set();
function f17() {
    const o33 = {
        "a": 256,
        get b() {
            let v21 = this;
            new Set(v21);
            v21 *= v21;
            new Uint32Array();
            new BigUint64Array();
            const v32 = new Float64Array();
            return v32;
        },
    };
    return o33;
}
const v34 = f17();
const v35 = f17();
f17();
new Uint16Array(v34);
new Int32Array();
for (let v45 = 0; v45 < 5; v45++) {
    const v46 = v35[f17];
    try { v46(); } catch (e) {}
}
gc();
