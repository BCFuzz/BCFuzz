for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F11();
v15.b = Int8Array;
const v16 = new F11(v15, v15);
function f17() {
    const v18 = v15.b;
    const v20 = new Int16Array(Int16Array);
    function F21(a23, a24, a25, a26) {
        if (!new.target) { throw 'must be called with new'; }
        a23.constructor = v18;
        a23.slice(a26, a25, a26, F11, Int16Array);
    }
    new F21(v20);
    return F11;
}
const v31 = new Int32Array(681);
const o32 = {
    "get": f17,
};
const v34 = new Proxy(v16, o32);
function f35(a36, a37, a38, a39) {
    const v40 = [v34];
    try { v40.toLocaleString(a37, v16); } catch (e) {}
    return f17;
}
v31.map(f35);
gc();
