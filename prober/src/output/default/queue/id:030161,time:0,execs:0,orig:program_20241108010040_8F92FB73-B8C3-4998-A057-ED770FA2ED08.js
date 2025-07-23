const v0 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
const v3 = new SharedArrayBuffer(56);
const v5 = new BigInt64Array(v3);
function f6(a7) {
    return v0 === f6;
}
v5[Symbol.toPrimitive] = f6;
for (let v11 = 0; v11 < 5; v11++) {
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
    const v23 = createGlobalObject();
    const v24 = v23.Uint16Array;
    const v25 = v23.Atomics;
    v25.notify(v5, v23, v24);
    v25.waitAsync(v5, v25, v5);
}
gc();
