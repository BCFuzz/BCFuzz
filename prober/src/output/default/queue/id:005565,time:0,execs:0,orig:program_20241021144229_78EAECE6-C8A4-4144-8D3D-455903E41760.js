const v1 = new Float64Array();
const v3 = new Float32Array(v1, v1, Float32Array);
const v4 = `
    let v6 = Reflect.deleteProperty(v3);
    v6 &&= v1;
    const o11 = {
        toString(a8, a9) {
            this.toString(v6);
            return this;
        },
    };
`;
eval(v4);
gc();
