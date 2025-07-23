const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v11 = Symbol.toPrimitive;
                    const o16 = {
                        [v11]() {
                            new Int32Array(681);
                        },
                    };
                    function f17(a18, a19, a20, a21) {
                        return f17;
                    }
                    /\u{12345}/myvis;
                    return f17;
                }
            `;
            const v23 = v8.split(a6);
            try { v23.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
