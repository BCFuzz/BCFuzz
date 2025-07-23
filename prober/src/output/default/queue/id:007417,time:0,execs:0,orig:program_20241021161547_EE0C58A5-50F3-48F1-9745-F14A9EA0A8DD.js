for (let v0 = 0; v0 < 250; v0++) {
    const v1 = [v0,v0];
    v1[Symbol.isConcatSpreadable] = v0;
    v1.concat();
}
gc();
