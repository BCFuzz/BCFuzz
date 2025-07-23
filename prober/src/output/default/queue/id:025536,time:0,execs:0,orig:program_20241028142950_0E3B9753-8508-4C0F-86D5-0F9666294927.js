for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = new Int8Array(Int8Array, Int8Array);
const v13 = `
    class C14 {
        constructor() {
            for (let i18 = 0, i19 = 10;
                i18 < i19;
                (() => {
                    with (v11) {
                    }
                })()) {
            }
        }
    }
`;
const v25 = v13.split();
try { v25.flatMap(eval); } catch (e) {}
gc();
