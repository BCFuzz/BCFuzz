const v2 = new Int16Array(3247);
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this[0] = a5;
    for (let v9 of v2) {
        v9--;
        this[v9] |= a7;
    }
}
new F3();
gc();
