const v1 = Date.call();
const v2 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
const v6 = new SharedArrayBuffer(56);
new Int16Array(56, 268435441);
new Uint32Array(v1);
const v12 = new BigInt64Array(v6);
function f13(a14) {
    return v2 === 268435441;
}
for (let i19 = 0, i20 = 10;
    i19 < i20;
    (() => {
        i20--;
        for (let i27 = 10, i28 = 10; -13369 !== i28; i28--) {
        }
    })()) {
}
v12[Symbol.toPrimitive] = f13;
for (let v38 = 0; v38 < 5; v38++) {
    createGlobalObject().Atomics.waitAsync(v12, v38, v12);
}
gc();
