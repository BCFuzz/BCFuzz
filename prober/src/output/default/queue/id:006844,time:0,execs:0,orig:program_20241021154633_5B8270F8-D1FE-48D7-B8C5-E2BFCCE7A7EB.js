function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = createGlobalObject();
const v6 = v5.EvalError;
const v7 = v5.Float16Array;
const v8 = new v7(F0, v7, v7, v6);
v8.subarray(F0, v6);
gc();
