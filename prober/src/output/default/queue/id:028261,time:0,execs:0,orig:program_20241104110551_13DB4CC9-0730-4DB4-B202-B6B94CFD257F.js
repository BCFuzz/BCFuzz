const v0 = `
    async function* f1(a2, a3) {
        function F4(a6) {
            if (!new.target) { throw 'must be called with new'; }
            function f7() {
                function f8() {
                    return f7;
                }
                const v11 = new Uint8ClampedArray(4294967296);
                v11.byteLength;
                const v13 = f8.apply();
                try { v13(a3); } catch (e) {}
                return f8;
            }
            f7();
            for (let i18 = -3, i19 = 10; i19--, i18 < i19;) {
            }
        }
        class C26 extends F4 {
            #p(a28, a29) {
            }
        }
        new C26();
        return v0;
    }
    f1(f1, v0);
`;
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
}
const v43 = eval(v0);
v43.next(v43, v43, v0);
gc();
