const v0 = [31731,127,30571,4,-2,58858,12,3];
const v1 = `
    class C2 {
        static {
            let v4;
            try { v4 = this(C2); } catch (e) {}
            function F5(a7, a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
                return v0;
                let {"byteLength":v12,"byteOffset":v13,} = Int16Array();
                Uint8Array();
                BigUint64Array(v0, v4, a8);
            }
            new BigInt64Array();
            [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0];
            Date(C2);
            Array(v4);
        }
    }
    /\u{12345}/myvis;
`;
eval(v1);
gc();
