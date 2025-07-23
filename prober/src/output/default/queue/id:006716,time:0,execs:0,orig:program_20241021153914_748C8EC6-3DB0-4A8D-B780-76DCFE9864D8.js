const v0 = [];
function f1() {
    let {...v2} = v0;
    return v2;
}
Reflect[Symbol.toPrimitive] = f1;
const v8 = new BigUint64Array();
try { v8.copyWithin(Uint8ClampedArray, Reflect); } catch (e) {}
gc();
