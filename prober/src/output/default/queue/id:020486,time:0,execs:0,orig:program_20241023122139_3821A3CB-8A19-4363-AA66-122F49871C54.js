const v0 = `
    for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
    }
    for (let i13 = -3, i14 = 10; i13 < i14; i14--) {
    }
    const v22 = new Uint16Array(Uint16Array, v0, Uint16Array);
    const v23 = [13,-1979785640,268435441,-1073741824,-9007199254740991,-45599,12368];
    let v24;
    try { v24 = v23.every(v23, v23); } catch (e) {}
    let v26 = typeof undefined;
    v22.byteOffset -= v26 &&= v24;
`;
eval(v0);
gc();
