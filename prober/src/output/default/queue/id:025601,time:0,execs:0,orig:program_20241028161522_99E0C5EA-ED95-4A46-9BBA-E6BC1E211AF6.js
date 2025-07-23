for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                for (let [i28, i29] = (() => {
                        let v21 = 0;
                        while (v21 < 10) {
                            function f24(a25, a26) {
                                return f24;
                            }
                            v21++;
                        }
                        return [0, 10];
                    })();
                    i28 < i29;
                    ) {
                    a16 *= eval;
                    /\u{12345}/myvis;
                }
            `;
            const v36 = v18.split(a16);
            try { v36.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
