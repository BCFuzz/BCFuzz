new Float32Array(512);
new Float32Array(6);
new BigUint64Array(7);
new Uint8ClampedArray(239);
class C16 {
}
const v17 = new C16();
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const o23 = {
        "maxByteLength": a22,
    };
    o23.toJSON = o23;
    function f25() {
        return f25;
    }
    const v27 = Object(o23);
    const o28 = {
        [Math]: v27,
        "h": o23,
    };
    o28.toJSON = f25;
    JSON.stringify(o28);
}
const v31 = new F19();
const t25 = v31.constructor;
new t25(v17, true);
new Uint8ClampedArray(9);
new RegExp(4096);
const v40 = [1.7976931348623157e+308,1e-15,3.5204602049067457,2.980655024970983e+306,-1.4601091970828127e+308];
function f41(a42) {
    const v43 = [v40];
    const v44 = v40.__proto__;
    try { v44.at(v43); } catch (e) {}
}
v40[Symbol.toPrimitive] = f41;
class C48 {
    static [v40];
}
gc();
