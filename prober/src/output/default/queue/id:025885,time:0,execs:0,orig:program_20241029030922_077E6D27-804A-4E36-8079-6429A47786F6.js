const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        }
        const v14 = [1.7976931348623157e+308,1e-15,3.5204602049067457,2.980655024970983e+306,-1.4601091970828127e+308];
        function f15(a16) {
            const t6 = URIError(a16).__proto__;
            delete t6[[9223372036854775807,9007199254740991]];
        }
        const v23 = Symbol.toPrimitive;
        v14[v23] = f15;
        class C24 {
            static [v14];
        }
        return v23;
    }
    f1.apply();
`;
for (let i28 = 0, i29 = 10;
    (() => {
        const v30 = i28 < i29;
        for (let i33 = 0, i34 = 10; i33 !== i34; i34--) {
        }
        return v30;
    })();
    i29--) {
}
eval(v0).next(v0, v0, eval, v0, eval);
gc();
