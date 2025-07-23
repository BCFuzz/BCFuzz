function f0() {
    return f0;
}
f0[Symbol.species] = f0;
const v4 = new Uint16Array();
v4.constructor = f0;
try { v4.slice(); } catch (e) {}
gc();
