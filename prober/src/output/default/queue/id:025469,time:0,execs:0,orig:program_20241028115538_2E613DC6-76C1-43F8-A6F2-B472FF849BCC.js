const o1 = {
};
function f2(a3, a4) {
    return f2;
}
o1.get = f2;
const v6 = new Proxy(Uint8ClampedArray, o1);
try { new v6(); } catch (e) {}
gc();
