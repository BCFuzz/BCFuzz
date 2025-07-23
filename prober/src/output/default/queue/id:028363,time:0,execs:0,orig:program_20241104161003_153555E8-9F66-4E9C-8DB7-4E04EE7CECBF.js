function f0() {
    Int32Array();
    return Int32Array;
}
function f4() {
    return f4;
}
f4[Symbol.toPrimitive] = f0;
function f7(a8, a9) {
    let v10 = a9 | a9;
    v10--;
    return v10;
}
const v12 = f7();
const v13 = [64,64,v12,f4,v12];
try { v13.sort(f7); } catch (e) {}
gc();
