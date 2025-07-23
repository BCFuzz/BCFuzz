const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    [...[1024,-16,64721,45076,45108,-1092154416,-2147483648,-12,47328]];
                    /\u{12345}/myvis;
                    return v8;
                }
            `;
            const v13 = v8.split(a6);
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
