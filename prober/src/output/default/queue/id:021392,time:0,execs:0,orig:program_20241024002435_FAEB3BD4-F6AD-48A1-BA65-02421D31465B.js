const o1 = {
};
function f2(a3, a4) {
    return a3;
}
o1.get = f2;
const v6 = new Proxy(Set, o1);
try { new v6(); } catch (e) {}
gc();
