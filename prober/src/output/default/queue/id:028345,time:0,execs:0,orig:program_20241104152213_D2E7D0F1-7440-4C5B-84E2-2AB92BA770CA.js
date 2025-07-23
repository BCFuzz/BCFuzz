const v2 = new Int8Array(64);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v7 = this.__defineSetter__;
            let v8;
            try { v8 = v7(); } catch (e) {}
            const v10 = `
                function f11() {
                    const v14 = C4 > v8 ? C4 : C4;
                    f11 > v14 ? -51383 : v14;
                    return /\u{12345}/myvis;
                }
            `;
            const v18 = v10.split(a6);
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
