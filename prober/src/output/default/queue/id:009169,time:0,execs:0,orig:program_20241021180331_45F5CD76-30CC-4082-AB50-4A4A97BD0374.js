const o2 = {
};
function f3(a4, a5) {
    return 2.2250738585072014e-308;
}
o2.set = f3;
const v7 = new Proxy(Int16Array, o2);
v7.length = v7;
gc();
