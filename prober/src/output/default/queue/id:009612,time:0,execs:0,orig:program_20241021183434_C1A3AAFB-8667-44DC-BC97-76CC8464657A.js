function f0(a1, a2, a3) {
    return f0;
}
const v4 = f0();
for (let i7 = 0, i8 = 7; i7 < i8; i8--) {
    for (let v15 = 0; v15 < 25; v15++) {
        const v16 = [43319,256,-12,536870889,383344779,257];
        const v18 = [f0];
        Reflect.apply(v16.flatMap, v4, v18);
    }
}
gc();
