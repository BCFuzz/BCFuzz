const v2 = new BigInt64Array();
class C3 extends Int32Array {
    constructor(a5, a6) {
        super();
        const v8 = new Int16Array();
        const v9 = v8.constructor;
        try { new v9(v2); } catch (e) {}
    }
}
new C3();
gc();
