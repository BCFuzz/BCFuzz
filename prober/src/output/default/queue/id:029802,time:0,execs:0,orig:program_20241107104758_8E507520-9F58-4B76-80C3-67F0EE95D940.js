const v0 = [0.0,0.3518706063998608,0.0,3.2230286577878395,1e-15,1.0,0.7852027918254653,4.0,-44.745675620785846];
const v1 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
const v2 = [];
const v6 = new SharedArrayBuffer(56);
const v8 = new BigInt64Array(v6);
function f9(a10) {
    a10.repeat(v2);
    const v12 = v1 === 268435441;
    delete v0[9];
    return v12;
}
Symbol.prototype;
v8[Symbol.toPrimitive] = f9;
for (let v17 = 0; v17 < 50; v17++) {
    const v19 = createGlobalObject();
    const t15 = v19.EvalError;
    new t15(268435441);
    const t17 = v19.WeakMap;
    new t17();
    const v24 = v19.Atomics;
    try { v24.waitAsync(v8, v17, v8); } catch (e) {}
}
gc();
