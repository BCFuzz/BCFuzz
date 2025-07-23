let v1 = new Int32Array();
const v2 = `
    const v4 = new Map();
    let {...v6} = v4.entries();
    [v1,...v6] = v4;
`;
eval(v2);
gc();
