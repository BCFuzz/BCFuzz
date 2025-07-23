function f1(a2, a3, a4) {
    new SharedArrayBuffer(a4);
    return f1;
}
f1[0] = 422;
const v7 = f1(422, f1, 422);
for (let i10 = 0, i11 = 7; i10 < i11; i11--) {
    for (let v18 = 0; v18 < 25; v18++) {
        const v19 = [43319,256,-12,536870889,383344779,257];
        const v21 = [f1];
        Reflect.apply(v19.flatMap, v7, v21);
    }
}
gc();
