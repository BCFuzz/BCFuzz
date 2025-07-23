const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v10 = \`
                        /\u{12345}/myvis;
                        function F12(a14, a15) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                    \`;
                    return f9;
                }
            `;
            const v16 = v8.split(a6);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
