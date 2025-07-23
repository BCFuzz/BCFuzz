class C0 {
}
const v1 = new C0();
function f2() {
    return v1 in ([-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677]).toLocaleString().small();
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F7(v1, f2);
const v12 = [v11,v11];
const o13 = {
    "getOwnPropertyDescriptor": f2,
};
const v15 = new Proxy(v12, o13);
try { v15.reverse(f2, v12, v12); } catch (e) {}
gc();
