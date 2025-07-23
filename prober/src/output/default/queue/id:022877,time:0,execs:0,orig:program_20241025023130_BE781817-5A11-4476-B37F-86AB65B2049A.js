for (let v0 = 0; v0 < 10; v0++) {
    function f1(a2, a3) {
        const o6 = {
            "maxByteLength": 1024,
        };
        const v8 = new SharedArrayBuffer(127, o6);
        const v10 = new Int32Array(v8);
        class C11 {
            toString(a13) {
                super[this];
            }
        }
        const v15 = new C11();
        const v17 = [o6];
        Reflect.apply(v15.toString, v10, v17);
        return a2;
    }
    for (let v20 = 0; v20 < 50; v20++) {
        f1(f1, v20);
    }
}
gc();
