function f0() {
    return Int32Array(f0);
}
function f4() {
    return f4;
}
f4[Symbol.toPrimitive] = f0;
function f7(a8, a9) {
    a9 | a9;
    const o11 = {
    };
    return o11;
}
const v12 = f7();
const v13 = [64,64,v12,f4,v12];
try { v13.sort(f7); } catch (e) {}
gc();
