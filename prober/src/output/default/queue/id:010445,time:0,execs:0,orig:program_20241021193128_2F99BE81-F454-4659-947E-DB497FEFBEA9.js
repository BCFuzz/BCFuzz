for (let v1 = 0; v1 < 100; v1++) {
    const v2 = new Int8Array(v1, v1);
    const v4 = new Int32Array();
    function f5(a6) {
        function F7(a9, a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = new Float32Array(2554, a9, a9);
            class C17 {
                constructor(a19, a20, a21) {
                    a21 in v15;
                }
            }
            const v23 = new C17(Float32Array, 1182, 2554);
            new C17(f5, v23, v1);
        }
        new F7();
    }
    v4.toString = f5;
    v4 >= v2;
}
gc();
