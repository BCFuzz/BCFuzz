function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 100; v4++) {
        try { ("toString").repeat(9007199254740992); } catch (e) {}
    }
}
new F0();
new F0();
gc();
