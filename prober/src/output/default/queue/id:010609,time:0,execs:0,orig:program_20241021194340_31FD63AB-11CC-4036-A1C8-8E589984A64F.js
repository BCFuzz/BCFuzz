function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 25; v2++) {
        const v4 = new Int16Array();
        function f5(a6, a7) {
            let {"byteLength":v8,"byteOffset":v9,} = v4;
            v8--;
            return v9;
        }
        for (let v11 = 0; v11 < 5; v11++) {
            f5(f5, v11);
        }
    }
}
new F0();
gc();
