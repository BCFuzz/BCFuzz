let {...v1} = Reflect;
for (const v2 in Reflect) {
}
const v3 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
for (let i = 0; i < 100; i++) {
    const o4 = {
        __proto__: v3,
    };
    o4.copyWithin();
}
gc();
