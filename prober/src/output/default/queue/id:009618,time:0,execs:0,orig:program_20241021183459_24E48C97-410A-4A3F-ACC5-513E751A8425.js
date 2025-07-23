function f1(a2, a3, a4) {
    return f1;
}
f1[0] = 422;
const v5 = f1(422, 422, 422);
for (let i8 = 0, i9 = 7; i8 < i9; i9--) {
    for (let v16 = 0; v16 < 25; v16++) {
        const v17 = [43319,256,-12,536870889,383344779,257];
        const v19 = [f1];
        Reflect.apply(v17.flatMap, v5, v19);
    }
}
gc();
