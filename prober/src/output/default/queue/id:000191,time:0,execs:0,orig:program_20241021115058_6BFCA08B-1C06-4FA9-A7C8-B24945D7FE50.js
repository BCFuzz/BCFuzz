const v2 = new Uint32Array();
const v5 = new Float32Array(1);
for (let v6 = 0; v6 < 5; v6++) {
    v2["p" + v6] = v6;
}
Reflect.construct(Uint32Array, [v5,4294967295]);
gc();
