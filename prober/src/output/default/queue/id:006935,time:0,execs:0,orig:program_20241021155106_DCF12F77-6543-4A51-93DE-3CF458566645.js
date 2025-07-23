for (let v3 = 0; v3 < 100; v3++) {
    function f4(a5, a6, a7) {
        return a5.concat(a7);
    }
    f4("some", "some", Uint32Array);
    f4("j");
}
gc();
