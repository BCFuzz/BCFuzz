const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            i6 < i7;
            (() => {
                function f12(a13, a14) {
                    for (let v15 = 0; v15 < 10; v15++) {
                        const v16 = /kt/yvs;
                        const v17 = v16.__proto__;
                        v16.test(a3);
                        function f19(a20) {
                            return a13;
                        }
                        Object.defineProperty(v17, "e", { configurable: true, enumerable: true, set: f19 });
                    }
                    return f12;
                }
                const v21 = [13720,20493];
                v21.valueOf = f12;
                true <= v21;
                i7--;
            })()) {
        }
        return a3;
    }
    f1();
`;
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
    }
}
eval(v0).next(v0);
gc();
