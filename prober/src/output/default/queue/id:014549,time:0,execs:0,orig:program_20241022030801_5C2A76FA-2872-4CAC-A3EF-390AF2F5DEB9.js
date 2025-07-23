for (let i = 0; i < 10; i++) {
    function f1(a2, a3, a4, a5) {
        for (let i8 = 0, i9 = 10;
            (() => {
                const v10 = i8 < i9;
                let o31 = {
                    toString(a15, a16) {
                        const v17 = Array();
                        class C18 extends Array {
                        }
                        const v19 = new C18();
                        const v20 = new C18();
                        function F21(a23, a24, a25) {
                            if (!new.target) { throw 'must be called with new'; }
                            const v26 = a24.splice(a24, BigInt64Array, Uint32Array);
                            Object.defineProperty(v26, 94, { configurable: true, value: a24 });
                            v26.pop();
                        }
                        const v28 = new F21(v19, v20);
                        const t15 = v28.constructor;
                        new t15(v28, v17);
                    },
                };
                o31 *= o31;
                return v10;
            })();
            i9--) {
        }
    }
    f1();
}
class C38 {
}
gc();
