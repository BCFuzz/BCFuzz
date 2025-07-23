const v2 = new Int8Array(255);
for (let v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v11 = Symbol.toPrimitive;
                    const o18 = {
                        [v11]() {
                            let v14 = -5;
                            Math.tanh(v11);
                            --v3;
                            ++v14;
                        },
                    };
                    /\u{12345}/myvis;
                    return v11;
                }
            `;
            const v20 = v8.split(a6);
            try { v20.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
