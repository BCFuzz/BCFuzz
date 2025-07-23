for (let i = 0; i < 10; i++) {
    function f2(a3, a4, a5, a6) {
        a4.localeCompare(a4);
        return undefined;
    }
    f2(undefined, "multiline");
}
gc();
