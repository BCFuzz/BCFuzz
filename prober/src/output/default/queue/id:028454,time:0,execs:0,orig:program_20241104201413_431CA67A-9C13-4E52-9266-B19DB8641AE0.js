const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f10(a11, a12, a13, a14) {
                    function f16() {
                        return a12;
                    }
                    f16.apply(BigInt64Array, arguments);
                    return f10;
                }
            `;
            const v18 = v8.split(a6);
            v18.reverse(v3, a6, v18, this, v18);
            try { v18.flatMap(Function); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
