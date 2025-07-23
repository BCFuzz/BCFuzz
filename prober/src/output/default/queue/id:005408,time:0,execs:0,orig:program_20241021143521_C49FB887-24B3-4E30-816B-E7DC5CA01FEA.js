const v1 = new Float64Array();
const v3 = new Float32Array(v1, v1, v1);
const v4 = `
    let v6 = Reflect.deleteProperty(v3);
    !(v6 &&= v1);
`;
eval(v4);
gc();
