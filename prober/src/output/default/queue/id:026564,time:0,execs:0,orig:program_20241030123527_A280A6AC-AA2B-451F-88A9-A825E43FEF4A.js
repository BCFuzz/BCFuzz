for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        for (let i7 = 0, i8 = 10; i7 != i8; i8--) {
        }
        return v4;
    })();
    i3--) {
}
for (let i22 = 0, i23 = 10; i23--, i22 < i23;) {
}
const v32 = new Int8Array(255);
for (const v33 in v32) {
    class C34 {
        constructor(a36) {
            const v38 = `
                function f39() {
                    switch (C34) {
                    }
                    /\u{12345}/myvis;
                    return f39;
                }
            `;
            const v41 = v38.split(a36);
            try { v41.flatMap(eval); } catch (e) {}
        }
    }
    new C34(v33);
}
gc();
