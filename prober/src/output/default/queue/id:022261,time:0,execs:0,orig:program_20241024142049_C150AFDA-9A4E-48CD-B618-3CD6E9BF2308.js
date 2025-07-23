function f0(a1) {
    return a1;
}
const v3 = new Date();
const v4 = v3.toJSON;
try { v4.call(f0); } catch (e) {}
gc();
