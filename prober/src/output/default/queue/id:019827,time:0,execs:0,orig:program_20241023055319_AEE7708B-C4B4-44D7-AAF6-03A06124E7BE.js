let v1 = new Int32Array();
const v2 = `
    const v4 = new Map();
    eval();
    let {...v8} = v4.entries();
    [v1,...v8] = v4;
`;
eval(v2);
gc();
