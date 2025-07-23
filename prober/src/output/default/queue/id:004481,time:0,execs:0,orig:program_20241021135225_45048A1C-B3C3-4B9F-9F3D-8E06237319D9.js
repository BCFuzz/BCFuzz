function f0(a1) {
    const o24 = {
        valueOf(a3) {
            const v5 = new Uint8Array(a3);
            v5.set(this);
            function F7(a9) {
                if (!new.target) { throw 'must be called with new'; }
                Math.cos(59833);
            }
            for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
                new F7(a1);
            }
            return a1;
        },
    };
    return o24;
}
class C25 extends f0 {
}
const v26 = new C25();
v26.valueOf(C25, C25, f0, f0);
gc();
