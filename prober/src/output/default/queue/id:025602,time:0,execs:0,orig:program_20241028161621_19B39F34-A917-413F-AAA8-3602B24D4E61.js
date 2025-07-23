function f3(a4, a5, a6) {
    return f3;
}
f3[0] = 422;
const v7 = f3(422, Int8Array, Uint8ClampedArray);
for (let i10 = 0, i11 = 7;
    i10 < i11;
    (() => {
        const t0 = [9007199254740992,5,6,1413917211,3,-8,10];
        t0["p" + 422] = 422;
        i11--;
    })()) {
    for (let v21 = 0; v21 < 5; v21++) {
        const v22 = [43319,256,-12,536870889,383344779,257];
        v22.constructor = f3;
        try { v22.flatMap(Uint8ClampedArray); } catch (e) {}
        const v25 = [f3];
        const v26 = v22.flatMap;
        v26.apply(Int8Array, v25);
        Reflect.apply(v26, v7, v25);
    }
}
gc();
