const v1 = new Map();
for (let v2 = 0; v2 < 25; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        new Int8Array();
        for (const v7 of v1) {
        }
    }
    new F3();
}
gc();
