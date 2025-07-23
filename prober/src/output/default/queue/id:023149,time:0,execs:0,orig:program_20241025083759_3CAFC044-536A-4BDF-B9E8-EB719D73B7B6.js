function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
const v4 = v3.h;
let v5 = 3;
const v6 = v5--;
const v9 = Array(4294967295);
try { v9.push(v6, v4); } catch (e) {}
gc();
