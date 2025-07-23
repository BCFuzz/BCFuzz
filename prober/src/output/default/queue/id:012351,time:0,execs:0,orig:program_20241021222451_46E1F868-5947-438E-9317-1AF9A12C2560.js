for (let v2 = 0; v2 < 10; v2++) {
    const v3 = new Int8Array(v2);
    const v5 = new Int32Array(v3);
    function f6(a7) {
        try { Reflect.getPrototypeOf("cx"); } catch (e) {}
        return a7;
    }
    v5.toString = f6;
    v5 >= v3;
}
gc();
