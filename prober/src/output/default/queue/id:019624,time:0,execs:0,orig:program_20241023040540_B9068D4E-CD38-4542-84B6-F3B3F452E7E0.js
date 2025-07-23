function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        for (let [i14, i15] = (() => {
                class C3 {
                    valueOf(a5, a6, a7) {
                        for (let i = 0; i < 5; i++) {
                        }
                        let [] = a6;
                    }
                }
                const v8 = new C3();
                const v10 = new BigUint64Array();
                try { v10.slice(v10, v8); } catch (e) {}
                return [0, 10];
            })();
            (() => {
                i15--;
                for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
                }
                return i14 < i15;
            })();
            /\u{12345}/myvis) {
        }
    `;
    eval(v2);
}
new F0();
gc();
