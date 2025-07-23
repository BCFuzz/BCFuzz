function f1() {
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
    }
    const v13 = new Int8Array(255);
    for (const v14 in v13) {
        class C15 {
            constructor(a17) {
                const v19 = `
                    while (v19) {
                    }
                `;
                const v20 = v19.split();
                try { v20.flatMap(eval); } catch (e) {}
            }
        }
        new C15(C15);
    }
    const v24 = new Int16Array(v13, 255, 255);
    function f25(a26, a27) {
        return f1;
    }
    for (let v28 = 0; v28 < 5; v28++) {
        f25(v28, v13);
    }
    return v24;
}
f1();
f1();
gc();
