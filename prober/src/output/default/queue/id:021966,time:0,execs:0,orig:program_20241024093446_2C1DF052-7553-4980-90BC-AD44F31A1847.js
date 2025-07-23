for (let v0 = 0; v0 < 10; v0++) {
    function f1(a2, a3) {
        const v4 = /(?:ab)+/mgs;
        const v6 = ([v4,v4]).reverse();
        v6.toLocaleString().match(v4);
        return v6;
    }
    for (let v9 = 0; v9 < 25; v9++) {
        f1(f1, v0);
    }
}
gc();
