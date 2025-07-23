function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Uint32Array(1003);
    for (const v5 in v4) {
        const v6 = v5?.substring;
        v6.toString(F0, 1003, v6);
        v6[v5];
    }
    for (let i10 = 0; i10 < 21768; i10++) {
    }
}
class C16 extends F0 {
}
new C16();
gc();
