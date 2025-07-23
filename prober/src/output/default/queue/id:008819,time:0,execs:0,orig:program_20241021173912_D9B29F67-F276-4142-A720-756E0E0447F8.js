const v2 = new Int16Array(3247);
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    for (const v11 of v2) {
        this[v11] |= a9;
    }
}
new F5(2, 2, 129);
gc();
