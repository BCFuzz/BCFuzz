function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [0.0,0.3518706063998608,0.0,3.2230286577878395,1e-15,1.0,0.7852027918254653,4.0,-44.745675620785846];
const v4 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
const v8 = new SharedArrayBuffer(56);
const v10 = new BigInt64Array(v8);
function f11(a12) {
    const v13 = v4 === 268435441;
    const v14 = delete v3[9];
    v14 || v14;
    return v13;
}
Symbol.prototype;
v10[Symbol.toPrimitive] = f11;
for (let v19 = 0; v19 < 10; v19++) {
    const v22 = createGlobalObject().Atomics;
    try { v22.xor(v2, createGlobalObject, v22); } catch (e) {}
    try { v22.waitAsync(v10, v19, v10); } catch (e) {}
}
gc();
