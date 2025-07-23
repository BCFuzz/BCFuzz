for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        const v6 = new Int16Array();
        const v7 = v6.copyWithin();
        const v10 = new ArrayBuffer(15);
        const v12 = new DataView(v10);
        v12.setFloat32(v7, a3);
    }
    new F1();
}
gc();
