for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v11 = 0; v11 < 25; v11++) {
    const v13 = new Uint8Array(v11, v11, v11);
    const v14 = [v13,v13];
    function f16(a17, a18) {
        try { a17.concat("8e"); } catch (e) {}
    }
    const v21 = Date();
    function f22(a23, a24) {
        return f16(v14, ...v13, v21, ...arguments);
    }
    f22("-766907252");
}
gc();
