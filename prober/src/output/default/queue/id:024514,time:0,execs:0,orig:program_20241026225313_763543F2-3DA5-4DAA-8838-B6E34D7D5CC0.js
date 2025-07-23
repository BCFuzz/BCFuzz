function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
    const v3 = `
        for (const v4 of v2) {
            continue;
        }
        for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        }
    `;
    eval(v3);
}
new F0();
gc();
