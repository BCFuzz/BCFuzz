function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Uint8Array(this, a3);
    for (const v7 in v6) {
        const o8 = {
        };
        const v9 = o8.g;
        v9.hasOwnProperty(o8);
        v9.g = v9;
    }
}
new F0(F0, F0, F0);
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
