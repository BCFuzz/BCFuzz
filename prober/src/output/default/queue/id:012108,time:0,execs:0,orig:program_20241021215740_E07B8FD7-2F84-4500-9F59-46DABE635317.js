for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        let o25 = {
            toString(a9, a10) {
                const v11 = Array();
                class C12 extends Array {
                }
                const v13 = new C12();
                const v14 = new C12();
                function F15(a17, a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v20 = a18.splice(a18, BigInt64Array, Uint32Array);
                    Object.defineProperty(v20, 94, { configurable: true, value: a18 });
                    v20.pop();
                }
                const v22 = new F15(v13, v14);
                const t15 = v22.constructor;
                new t15(v22, v11);
                return v4;
            },
        };
        o25 *= o25;
        return v4;
    })();
    i3--) {
}
gc();
