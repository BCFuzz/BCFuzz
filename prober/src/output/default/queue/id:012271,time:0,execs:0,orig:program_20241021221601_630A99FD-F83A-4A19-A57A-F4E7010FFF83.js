const v1 = [256,-65536,1198883244,255,-65536,5];
function f2(a3, a4) {
    const o5 = {
        ...a3,
        "c": a3,
    };
    o5.c;
    return a4;
}
const v7 = f2(undefined, f2);
v7.apply(v7, v7, undefined, f2, f2);
f2(v7, v1);
f2(v1);
for (let v12 = 0; v12 < 100; v12++) {
    f2(this);
}
gc();
