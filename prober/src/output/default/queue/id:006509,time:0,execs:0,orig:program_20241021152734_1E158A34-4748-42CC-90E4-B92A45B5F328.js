for (let v2 = 0; v2 < 100; v2++) {
    const v3 = new Int8Array();
    const v5 = new Int32Array(v3, v2, v2);
    function f6(a7) {
        let v9;
        try { v9 = Reflect.has("TgD4"); } catch (e) {}
        return v9;
    }
    v5.toString = f6;
    v5 >= v3;
}
gc();
