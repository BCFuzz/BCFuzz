function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v6 = createGlobalObject();
const v7 = v4.EvalError;
const v8 = v6.Float16Array;
v8.name;
const v10 = new v8();
v10.subarray(F0, v7);
gc();
