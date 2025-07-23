function f0() {
    return f0;
}
const v1 = [f0,f0];
function f2() {
    return f0;
}
f2[Symbol.species] = f2;
v1.constructor = f2;
const v7 = this.constructor.freeze(v1);
try { v7.splice(); } catch (e) {}
gc();
