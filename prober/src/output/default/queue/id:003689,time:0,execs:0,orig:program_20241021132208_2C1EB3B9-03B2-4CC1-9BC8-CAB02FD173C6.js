new Float32Array(1024);
new BigInt64Array(2954);
const v8 = new Uint16Array(13);
function f9(a10, a11, a12, a13) {
    const o22 = {
        get d() {
            super.h;
            return 5;
        },
        "f": BigInt64Array,
        ...v8,
        1038: v8,
    };
    return o22;
}
f9(13, 13, 13, 2954);
f9(2954, 1024, 1024, 1024);
f9(1024, 2954, 2954, 2954);
const v28 = [5];
const v29 = [5];
function f30() {
    const v32 = new Uint32Array(v28, 5, 5);
    v32.constructor = f9;
    v32.slice(5, 5);
}
v29.valueOf = f30;
const v34 = [f30,f30,f30,f30];
const v36 = ([v28,v34]).copyWithin(5, 5);
function f37() {
    const v39 = new Uint8Array(5);
    new Uint8Array(v39);
    return v34;
}
v36.constructor = f37;
+v29;
gc();
