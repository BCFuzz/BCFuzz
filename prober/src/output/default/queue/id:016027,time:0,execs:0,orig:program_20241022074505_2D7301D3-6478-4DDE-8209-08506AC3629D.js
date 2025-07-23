for (let i = 0; i < 10; i++) {
    const v1 = 0 >> 0;
    function f2() {
        arguments[v1];
        return 0;
    }
    f2();
}
gc();
