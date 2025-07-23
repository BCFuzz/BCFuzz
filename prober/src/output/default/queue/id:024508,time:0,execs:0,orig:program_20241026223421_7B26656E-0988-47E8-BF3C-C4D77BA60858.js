const v1 = new Int8Array();
function f2() {
    return v1;
}
const o3 = {
    "getPrototypeOf": f2,
};
const v5 = new Proxy(v1, o3);
function f6() {
    function f7() {
        return f6;
    }
    const v8 = f7.apply();
    try { v8(v8, v8, Int8Array, f7); } catch (e) {}
    return v5.__proto__;
}
f6();
gc();
