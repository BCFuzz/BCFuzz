function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
function f4() {
    return v2;
}
v3[Symbol.iterator] = f4;
const v7 = [-5.0];
v7[Symbol.toPrimitive] = f4;
try { v7.slice(v7); } catch (e) {}
try { new Int32Array(v3); } catch (e) {}
gc();
