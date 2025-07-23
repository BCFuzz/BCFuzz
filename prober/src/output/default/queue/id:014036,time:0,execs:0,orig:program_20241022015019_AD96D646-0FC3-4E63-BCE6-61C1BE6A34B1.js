function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
const v5 = [[F0,F0,F0],v3];
let v6;
try { v6 = v5.sort(F0); } catch (e) {}
const v8 = new Float32Array(v6, v6);
v8.constructor = v6;
v8.slice(v6);
gc();
