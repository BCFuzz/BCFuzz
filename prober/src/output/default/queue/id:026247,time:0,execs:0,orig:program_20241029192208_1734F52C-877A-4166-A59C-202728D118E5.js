const v1 = 13 - 13;
for (let i5 = -3, i6 = 10; i6--, i5 < i6;) {
}
for (let v13 = 0; v13 < 10; v13++) {
    const v14 = createGlobalObject();
    const t5 = v14.ArrayBuffer;
    const v16 = new t5();
    const t7 = v14.ArrayBuffer;
    const v18 = new t7();
    function F19() {
        if (!new.target) { throw 'must be called with new'; }
        v18[v16] >>= v1;
    }
    new F19();
    new F19();
}
gc();
