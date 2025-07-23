let v0 = 2;
v0--;
for (let v2 = 0; v2 < 10; v2++) {
    const o31 = {
        [undefined](a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                class C14 {
                    8 = C14;
                    1647 = C14;
                    constructor(a16, a17) {
                        this[8] = this;
                        let v18 = arguments;
                        v18 = v0;
                    }
                }
                new C14();
                for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
                }
            }
            new F8();
        },
    };
    o31.undefined();
}
gc();
