function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4, a5) {
        for (let i9 = 0, i10 = 10 + 10; i10--, i10;) {
            const o17 = {
                get d() {
                    this.f = this;
                    return F0;
                },
            };
            function f18() {
                return f18;
            }
            function f19(a20) {
                const v23 = new Uint32Array(1000);
                for (const v24 in v23) {
                    function f25(a26, a27, a28, a29) {
                        const v30 = [];
                        function f31() {
                            return v30["toSpliced"]();
                        }
                        return arguments;
                    }
                    f25(v23, i9, v24, a4);
                }
                return a20;
            }
            Object.defineProperty(o17, "f", { enumerable: true, get: f18, set: f19 });
            const o36 = {
                ...o17,
            };
        }
        super();
    }
}
new C2();
for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
}
gc();
