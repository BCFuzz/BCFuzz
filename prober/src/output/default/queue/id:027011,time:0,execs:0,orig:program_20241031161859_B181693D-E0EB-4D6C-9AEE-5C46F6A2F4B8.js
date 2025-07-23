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
        for (const v17 in v5) {
            v4[v17];
            const v19 = v4.valueOf();
            let v20;
            try { v20 = v19(); } catch (e) {}
            for (let i24 = 0, i25 = 10;
                (() => {
                    const v26 = i24 < i25;
                    "-4096" - v20;
                    return v26;
                })();
                i25--) {
            }
        }
    }
} catch(e33) {
}
gc();
