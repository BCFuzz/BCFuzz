for (let i2 = -1, i3 = 10; i2 < i3; i3--) {
}
class C10 {
    toString(a12, a13, a14, a15) {
        const v16 = `
            async function* f17(a18, a19) {
                for (let i22 = 0, i23 = 10;
                    i22 <= i23;
                    (() => {
                        yield* f17(i23, i23);
                    })()) {
                }
                return this;
            }
        `;
        eval(v16);
    }
}
const v32 = new C10();
try { v32.toString(C10, v32, v32, v32); } catch (e) {}
gc();
