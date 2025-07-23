function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
const v4 = v3.constructor;
const v6 = new Int16Array(v4, v4, v4);
const v8 = new Int16Array(v6.subarray(), v4, v4);
const v11 = Reflect.apply(v8.copyWithin, v6, v4);
try { v11.set(Float32Array); } catch (e) {}
gc();
