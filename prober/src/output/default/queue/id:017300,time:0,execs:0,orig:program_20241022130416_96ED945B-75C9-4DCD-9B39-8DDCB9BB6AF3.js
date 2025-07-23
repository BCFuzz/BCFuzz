for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 25; v10++) {
    const v12 = new Uint8Array();
    const v13 = [v10,v10,v10];
    function f15(a16, a17) {
        try { a16.concat("8e"); } catch (e) {}
    }
    function f19(a20, a21) {
        f15(v13, ...v12);
    }
    f19(v12, "8e");
}
gc();
