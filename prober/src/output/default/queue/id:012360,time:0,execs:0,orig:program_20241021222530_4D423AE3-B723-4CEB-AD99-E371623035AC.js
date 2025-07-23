const o2 = {
};
function f3(a4, a5) {
    return f3;
}
o2.get = f3;
const v7 = new Proxy(Int16Array, o2);
try { new v7(-1); } catch (e) {}
gc();
