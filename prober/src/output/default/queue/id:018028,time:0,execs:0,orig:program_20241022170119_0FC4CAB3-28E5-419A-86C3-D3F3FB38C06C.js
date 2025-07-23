function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
for (let i6 = 0, i7 = 10 + 10; i7--, i6 < i7;) {
    const v15 = createGlobalObject();
    const v16 = v15.EvalError;
    const v17 = v15.Atomics;
    try { v17.add(C2, C2, v16); } catch (e) {}
    for (let v19 = 0; v19 < 250; v19++) {
    }
}
[-16,2147483649,-128,268435440];
gc();
