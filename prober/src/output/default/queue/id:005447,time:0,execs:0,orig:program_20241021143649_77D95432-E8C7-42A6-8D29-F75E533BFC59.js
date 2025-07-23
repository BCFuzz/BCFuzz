for (let v0 = 0; v0 < 250; v0++) {
    function f2() {
        return 3826;
    }
    const v4 = new Int16Array();
    const o5 = {
        "set": f2,
    };
    const v7 = new Proxy(v4, o5);
    v7[10] = 3826;
}
gc();
