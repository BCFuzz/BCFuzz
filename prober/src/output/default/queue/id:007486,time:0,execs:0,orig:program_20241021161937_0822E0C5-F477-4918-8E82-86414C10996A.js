class C0 {
}
const v1 = new C0();
function f2() {
    return C0;
}
const o3 = {
};
const o7 = {
    [v1]: v1,
    toString(a5, a6) {
        return o3;
    },
    "set": f2,
};
const v9 = new Proxy(o3, o7);
v9.e = v9;
v9.a = v9;
gc();
