for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                const o27 = {
                    toString(a20, a21) {
                        /\u{12345}/myvis;
                        ("function")["trimLeft"](...[0.08302096799461967,Infinity,-1.0,0.7163775701972261]);
                        return v18;
                    },
                };
            `;
            const v28 = v18.split(a16);
            try { v28.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
