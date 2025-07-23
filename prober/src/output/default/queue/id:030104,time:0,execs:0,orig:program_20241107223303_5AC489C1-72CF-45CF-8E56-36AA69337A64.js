for (let i3 = -3, i4 = 10;
    (() => {
        const v5 = 8 < i4;
        class C6 {
        }
        new C6();
        return v5;
    })();
    i4--) {
}
const v13 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
class C17 extends Uint8ClampedArray {
}
const v18 = new C17(4294967296);
const t14 = v18.subarray();
t14.byteOffset **= -13369;
const v23 = new SharedArrayBuffer(56);
const v25 = new BigInt64Array(v23);
function f26(a27) {
    return v13 === 268435441;
}
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
}
new F29();
v25[Symbol.toPrimitive] = f26;
for (let v36 = 0; v36 < 5; v36++) {
    createGlobalObject().Atomics.waitAsync(v25, v36, v25);
}
class C42 extends Uint8ClampedArray {
}
new C42(4294967296);
gc();
