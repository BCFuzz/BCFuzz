const o3 = {
    "maxByteLength": 981,
};
const v5 = new SharedArrayBuffer(0, o3);
const v7 = new Float64Array(v5);
delete v7["-4959"];
gc();
