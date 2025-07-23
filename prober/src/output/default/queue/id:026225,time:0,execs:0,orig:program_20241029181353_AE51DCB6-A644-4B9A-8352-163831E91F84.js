const v0 = `
    /\u{12345}/myvis;
    class C3 extends Uint8Array {
        static {
            for (let i7 = -3, i8 = 10; i7 < i8; i8--) {
            }
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v20 = [303537114,-4294967297,1000];
            const v21 = [-1,9,4294967296,65536,10,49592,10];
            const v23 = [];
            const v25 = Reflect.apply(v20.sort, v21, v23);
            v25[986] = C3;
            v25.join(Reflect).replace(F15);
        }
    }
`;
eval(v0);
gc();
