const o6 = {
    toString(a2, a3) {
        class C4 {
        }
        class C5 extends C4 {
        }
        Object.defineProperty(C4, 6, { configurable: true, value: -13 });
        return -13;
    },
};
-o6;
const v8 = [-4294967297,-42916,536870912,5682,-4096,-7,-2147483648,128,1086448957,257];
try { new BigInt64Array(v8); } catch (e) {}
gc();
