const v2 = `
    /\u{12345}/myvis;
    class C5 extends Uint8Array {
        static {
            for (let i8 = 0, i9 = 2;
                (() => {
                    for (let i12 = -3, i13 = 10; i12 < i13; i13--) {
                    }
                    function F20(a22, a23, a24) {
                        if (!new.target) { throw 'must be called with new'; }
                        const v26 = new Float32Array(this, a22, 1425637256);
                        for (const v27 in v26) {
                        }
                    }
                    const v28 = [303537114,-4294967297,1000];
                    const v29 = [-1,9,4294967296,65536,10,49592,10];
                    v29[1000] = Date();
                    const v33 = [];
                    Reflect.apply(v28.sort, v29, v33).join(Reflect).replace(F20);
                    return 1425637256 < i9;
                })();
                ) {
            }
        }
    }
`;
eval(v2);
gc();
