const o2 = {
    "maxByteLength": 3828,
};
const v4 = new SharedArrayBuffer(257, o2);
const v6 = new Float32Array(v4);
function f7() {
    return 257;
}
const v8 = [-1000000000.0,-5.0,-484.80493389189144,1000000000000.0,1.7976931348623157e+308,-Infinity,-1.7976931348623157e+308];
const v10 = [f7];
Reflect.apply(v8.findIndex, v6, v10);
gc();
