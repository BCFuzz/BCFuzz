for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                for (let [i21, i22] = (() => {
                        while (v18) {
                        }
                        return [0, 10];
                    })();
                    i21 < i22;
                    ) {
                    /\u{12345}/myvis;
                }
            `;
            const v29 = v18.split(a16);
            try { v29.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
