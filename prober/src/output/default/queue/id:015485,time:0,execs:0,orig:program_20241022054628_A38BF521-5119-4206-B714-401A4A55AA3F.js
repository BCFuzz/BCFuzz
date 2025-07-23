function f0() {
}
f0();
class C5 {
}
f0();
new C5();
const v8 = `
    for (let v9 = 0; v9 < 5; v9++) {
        function F10() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v12 = new F10();
        v12.constructor;
        new BigInt64Array(512);
        const o23 = {
            valueOf() {
            },
            m(a20, a21, a22) {
            },
        };
        function f24(a25, a26) {
        }
        for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
        }
        class C37 {
        }
        function F38(a40, a41) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v42 = new F38();
        v42.a = v42;
        let v43 = 0;
        try {
        const t0 = true;
        t0();
        } catch (e) {}
        v43++;
    }
`;
eval(v8);
gc();
