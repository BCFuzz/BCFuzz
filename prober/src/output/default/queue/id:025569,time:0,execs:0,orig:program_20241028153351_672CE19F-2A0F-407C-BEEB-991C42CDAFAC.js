const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    for (const v13 in Array(346423508)) {
                    }
                    /\u{12345}/myvis;
                    return 346423508;
                }
            `;
            const v15 = v8.split(a6);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
