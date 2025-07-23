const v0 = [];
function f1() {
    const o2 = {
        [v0]: v0,
    };
    return o2;
}
const v3 = f1();
const o4 = {
    "get": f1,
};
const v6 = new Proxy(v3, o4);
const o7 = {
    ...v6,
};
gc();
