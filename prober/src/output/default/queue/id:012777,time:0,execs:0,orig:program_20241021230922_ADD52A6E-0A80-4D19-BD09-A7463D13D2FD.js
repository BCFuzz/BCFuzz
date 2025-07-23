function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
const v4 = v3.toString();
for (const v6 of v4.link(F0, v3, v4)) {
    const v8 = v6.slice.constructor;
    try { v8(v6); } catch (e) {}
}
gc();
