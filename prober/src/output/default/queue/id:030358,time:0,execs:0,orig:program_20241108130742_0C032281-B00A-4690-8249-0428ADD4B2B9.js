const v1 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
const v4 = new SharedArrayBuffer(56);
const v6 = new BigInt64Array(v4);
function f7(a8) {
    return v1 === f7;
}
v6[Symbol.toPrimitive] = f7;
for (let v11 = 0; v11 < 5; v11++) {
    const v14 = createGlobalObject().Atomics;
    v14.waitAsync(v6, v14, v6, v11);
}
gc();
