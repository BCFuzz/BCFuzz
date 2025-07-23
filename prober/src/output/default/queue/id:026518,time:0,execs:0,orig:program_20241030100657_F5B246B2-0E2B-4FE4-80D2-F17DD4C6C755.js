class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
try {
    class C3 {
        [v2];
        0;
    }
    const v4 = new C3();
    const v5 = new C3();
    for (let i9 = 0, i10 = 10 + 10; i10--, i9 < i10;) {
        for (let v17 = 0; v17 < 10; v17++) {
        }
        for (const v18 in v5) {
            v4[v18];
        }
    }
} catch(e20) {
}
gc();
