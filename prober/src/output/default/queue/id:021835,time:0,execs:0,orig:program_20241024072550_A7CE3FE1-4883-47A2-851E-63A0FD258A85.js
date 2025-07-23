function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
for (const v6 of v4.toString()) {
    try { v6.search(v6); } catch (e) {}
}
gc();
