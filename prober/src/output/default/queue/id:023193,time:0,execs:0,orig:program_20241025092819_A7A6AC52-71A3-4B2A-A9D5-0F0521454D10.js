function f0() {
    const o3 = {
        set c(a2) {
        },
    };
    return o3;
}
const v4 = f0();
const o5 = {
    "getOwnPropertyDescriptor": f0,
};
const v7 = new Proxy(v4, o5);
try { JSON.stringify(v7); } catch (e) {}
gc();
