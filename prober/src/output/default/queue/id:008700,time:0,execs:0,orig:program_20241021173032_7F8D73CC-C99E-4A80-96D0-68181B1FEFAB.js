function f0(a1, a2, a3) {
    return f0;
}
const v5 = new WeakMap();
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    for (let v16 = 0; v16 < 25; v16++) {
        const v17 = [43319,256,-12,536870889,383344779,257];
        const v19 = [f0,f0];
        Reflect.apply(v17.flatMap, v5, v19);
    }
}
gc();
