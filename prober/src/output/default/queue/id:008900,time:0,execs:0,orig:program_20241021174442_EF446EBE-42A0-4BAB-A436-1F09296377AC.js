function f1() {
    return 1n;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2();
const v7 = [v6,v6];
const o8 = {
    "getOwnPropertyDescriptor": f1,
};
const v10 = new Proxy(v7, o8);
try { v10.reverse(Proxy, v10, 1n, 1n); } catch (e) {}
gc();
