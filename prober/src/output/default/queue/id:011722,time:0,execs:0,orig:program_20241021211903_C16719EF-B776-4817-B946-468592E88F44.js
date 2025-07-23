const v1 = [Float64Array,Float64Array,Float64Array];
const o2 = {
};
const v4 = new Proxy(v1, o2);
new Float64Array(v4);
gc();
