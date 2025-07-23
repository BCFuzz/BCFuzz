for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v13 = new Int16Array(255);
for (const v15 of v13) {
    function F16(a18) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C19 extends F16 {
        static #c = F16;
        constructor(a21, a22, a23, a24) {
            super();
            try {
                const t12 = 0n;
                t12.#c = 0;
                let v25 = -2147483647;
                let v26 = v25 + v25;
                --v26;
                v25++;
            } catch(e29) {
            }
        }
    }
    new C19();
}
gc();
