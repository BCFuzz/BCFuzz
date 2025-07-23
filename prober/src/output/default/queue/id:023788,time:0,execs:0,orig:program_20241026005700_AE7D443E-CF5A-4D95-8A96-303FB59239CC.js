for (let v0 = 0; v0 < 10; v0++) {
    function f1(a2, a3) {
        const v4 = /(?:ab)+/i;
        return ([v4,v4]).reverse().toLocaleString(v0, a2, a2, a2).match(v4);
    }
    for (let v9 = 0; v9 < 25; v9++) {
        f1(v9, v0);
    }
}
gc();
