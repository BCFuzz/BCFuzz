const v0 = `
    /\u{12345}/myvis;
    class C3 extends Uint8Array {
        static {
            try { new this(); } catch (e) {}
            for (let i8 = -3, i9 = 10; i8 < i9; i9--) {
            }
            function F16(a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v21 = [303537114,-4294967297,1000];
            const v22 = [-1,9,4294967296,65536,10,49592,10];
            const v24 = [];
            const v26 = Reflect.apply(v21.sort, v22, v24);
            v26[986] = C3;
            v26.join(Reflect).replace(F16);
        }
    }
`;
eval(v0);
gc();
