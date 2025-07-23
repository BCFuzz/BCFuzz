for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                for (let i21 = 0, i22 = 10;
                    i21 < i22;
                    (() => {
                        function f26(a27, a28, a29, a30) {
                            return C14;
                        }
                    })()) {
                    a16 *= eval;
                    /\u{12345}/myvis;
                }
            `;
            const v34 = v18.split(a16);
            try { v34.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
