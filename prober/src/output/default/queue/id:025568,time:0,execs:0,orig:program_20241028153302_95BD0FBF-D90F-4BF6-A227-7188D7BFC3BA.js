const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                /\u{12345}/myvis;
                class C10 {
                    constructor(a12, a13, a14, a15) {
                    }
                    /*
                    constructor(a17, a18) {
                    }
                    */
                }
            `;
            const v19 = v8.split(a6);
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
for (let i24 = -3, i25 = 10; i25--, i24 < i25;) {
}
gc();
