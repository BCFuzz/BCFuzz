function f2(a3, a4, a5) {
    return f2;
}
f2[0] = 422;
const v6 = f2();
for (let i9 = 0, i10 = 7; i9 < i10; i10--) {
    for (let v17 = 0; v17 < 5; v17++) {
        const v18 = [43319,256,-12,536870889,383344779,257];
        try { v18.flatMap(Uint8ClampedArray); } catch (e) {}
        const v21 = [f2];
        Reflect.apply(v18.flatMap, v6, v21);
    }
}
gc();
