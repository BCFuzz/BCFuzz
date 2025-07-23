const v0 = `
    async function* f1(a2, a3) {
        for (let [i11, i12] = (() => {
                const v8 = URIError().__proto__;
                v8.Int16Array = Int16Array;
                with (v8) {
                    class C9 extends Int16Array {
                    }
                }
                return [0, 10];
            })();
            i11 < i12;
            i12--) {
        }
        return v0;
    }
    f1(f1, v0);
`;
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
    for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
    }
}
eval(v0).next();
gc();
