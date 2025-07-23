class C1 {
}
const v2 = new C1();
const v6 = new Int32Array(v2, C1, BigUint64Array);
v6.toReversed();
createGlobalObject();
const v11 = createGlobalObject().AggregateError;
try { new v11(v2, Infinity); } catch (e) {}
gc();
