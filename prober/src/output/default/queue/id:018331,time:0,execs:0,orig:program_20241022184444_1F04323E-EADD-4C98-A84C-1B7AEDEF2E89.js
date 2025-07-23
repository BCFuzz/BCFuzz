const v2 = createGlobalObject().Float16Array;
for (let v4 = 0; v4 < 5; v4++) {
    function f5(a6, a7) {
        a7.bind();
        return v4;
    }
    f5(true, v2);
    f5(v4, f5);
}
for (let i13 = -3, i14 = 10; i13 < i14; i14--) {
}
gc();
