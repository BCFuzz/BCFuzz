class C1 extends Int8Array {
    constructor(a3, a4) {
        const v7 = new Uint8ClampedArray(255);
        for (const v8 in v7) {
            function f9(a10) {
                const v11 = [1024,-16,64721,45076,45108,-1092154416,-2147483648,-12,47328];
                const v12 = [...v11,...v11];
                return v12.flatMap(a10, v12);
            }
            try { f9(); } catch (e) {}
        }
        super();
    }
}
new C1(Int8Array, C1);
gc();
