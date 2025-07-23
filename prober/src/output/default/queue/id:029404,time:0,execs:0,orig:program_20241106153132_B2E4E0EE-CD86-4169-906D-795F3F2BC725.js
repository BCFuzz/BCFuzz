for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
class C10 {
    toString(a12, a13, a14, a15) {
        for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
        }
        const v26 = `
            /1abc|def|ghi\ud808\udf45*xyz{0,1}/mdyiu;
            async function* f28(a29, a30) {
                for (let i33 = 0, i34 = 10;
                    i33 <= i34;
                    (() => {
                        yield* f28();
                    })()) {
                }
                return a30;
            }
        `;
        eval(v26);
    }
}
const v43 = new C10();
try { v43.toString(v43, C10); } catch (e) {}
for (let i47 = -3, i48 = 10; i48--, i47 < i48;) {
}
gc();
