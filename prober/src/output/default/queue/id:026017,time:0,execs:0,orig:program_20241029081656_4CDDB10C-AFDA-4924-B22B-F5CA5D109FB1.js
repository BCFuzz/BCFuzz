const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    /\u{12345}/myvis;
                    ~-1196850473;
                    return 255;
                }
            `;
            const v13 = v8.split(a6);
            v13.shift();
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
