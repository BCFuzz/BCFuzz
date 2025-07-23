const v0 = `
    async function* f1(a2, a3) {
        for (let [i20, i21] = (() => {
                const v7 = URIError().__proto__;
                for (let i10 = 0, i11 = 10;
                    (() => {
                        const v12 = i10 !== i11;
                        delete v7.f;
                        return v12;
                    })();
                    i11--) {
                }
                return [0, 10];
            })();
            i20 < i21;
            i21--) {
        }
        return v0;
    }
    f1();
`;
for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
}
eval(v0).next();
gc();
