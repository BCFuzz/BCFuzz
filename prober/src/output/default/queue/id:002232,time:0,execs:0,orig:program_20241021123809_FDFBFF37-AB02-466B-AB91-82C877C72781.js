function f0(a1, a2) {
    function f3() {
        return a1;
    }
    return f3;
}
const v4 = /Ga*/mdi;
v4[Symbol.iterator] = f0;
try { new Int8Array(v4); } catch (e) {}
gc();
