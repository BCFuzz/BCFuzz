const v1 = new Float64Array();
const v3 = new Float32Array();
const v4 = `
    let v6 = Reflect.deleteProperty(v3);
    v6 &&= v1;
`;
const t6 = eval(v4).constructor;
new t6(v3);
gc();
