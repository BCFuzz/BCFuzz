function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new Uint8Array(8);
const v6 = `
    async function* f7(a8, a9) {
        for (let [i35, i36] = (() => {
                function F12(a14, a15, a16) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v17 = new F12();
                for (let i20 = 0, i21 = 10;
                    (() => {
                        const v22 = i20 < i21;
                        const o27 = {
                            o(a24, a25, a26) {
                                return v17;
                            },
                        };
                        for (const v28 in o27) {
                            v17[v28];
                        }
                        return v22;
                    })();
                    i21--) {
                }
                return [0, 10];
            })();
            i35 < i36;
            i36--) {
            for (let i45 = 0, i46 = 10; i45 < i46; i46--) {
                for (let i55 = 0, i56 = 10; i55 < i56; i56--) {
                }
            }
        }
        return a8;
    }
    f7(f7);
`;
for (let i66 = 0, i67 = 10; i66 < i67; i67--) {
    for (let [i101, i102] = (() => {
            function F76(a78, a79) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v80 = new F76();
            const v81 = [2087322165,-1439285056];
            const v82 = [4096];
            function f83(a84, a85) {
                const o91 = {
                    [a85](a87, a88, a89, a90) {
                    },
                    [v81]: v82,
                };
                Object.defineProperty(o91, F76, { configurable: true, get: f83, set: f83 });
                return v80;
                const o92 = {
                };
            }
            f83(0, i66);
            f83();
            let v95 = 0;
            do {
                const t21 = f83(f83, F76);
                t21.valueOf = f83;
                new f83();
                v95++;
            } while (v95 < 10)
            return [0, 10];
        })();
        i101 < i102;
        i102--) {
    }
}
const v110 = eval(v6);
v110.next(-1000000.0, v110, v6, v6);
gc();
