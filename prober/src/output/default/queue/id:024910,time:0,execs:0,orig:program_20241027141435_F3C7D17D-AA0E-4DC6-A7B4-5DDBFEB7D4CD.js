class C1 extends Array {
}
const v2 = new C1();
for (let v3 = 0; v3 < 5; v3++) {
    for (let i6 = 0, i7 = 10;
        i6 < i7;
        (() => {
            i7--;
            class C13 extends v2.constructor {
            }
        })()) {
    }
    const v17 = new Set();
    const v19 = BigUint64Array.bind(v2, Set, v2);
    for (let i22 = 0, i23 = 10; i23--, i22 < i23;) {
        const v30 = v19.toString();
        for (const v32 of v30.link(v30)) {
            for (let i35 = 0, i36 = 10; i35 < i36; v17[v32], i36--) {
            }
        }
    }
}
gc();
