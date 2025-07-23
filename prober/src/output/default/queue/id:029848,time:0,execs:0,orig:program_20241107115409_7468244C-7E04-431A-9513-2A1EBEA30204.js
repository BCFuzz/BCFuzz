const v0 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
const v4 = new SharedArrayBuffer(56);
const v6 = new BigInt64Array(v4);
function f7(a8) {
    return v0 === 268435441;
}
const v11 = Symbol.prototype;
v6[Symbol.toPrimitive] = f7;
for (let v13 = 0; v13 < 5; v13++) {
    const v16 = createGlobalObject().Atomics;
    try { v16.waitAsync(v6, v13, v6, v11); } catch (e) {}
}
gc();
