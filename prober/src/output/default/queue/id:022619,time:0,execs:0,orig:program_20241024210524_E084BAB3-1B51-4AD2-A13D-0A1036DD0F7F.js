const v2 = new Float32Array(11);
const v5 = [512,[v2,v2,v2,v2,v2]];
const v7 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
for (let i = 0; i < 100; i++) {
    const o8 = {
        __proto__: v7,
        ...v5,
        ...v2,
    };
    o8.copyWithin(v7, -4294967295);
}
gc();
