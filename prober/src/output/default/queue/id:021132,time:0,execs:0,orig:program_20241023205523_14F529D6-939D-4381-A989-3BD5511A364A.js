new Int8Array(Int8Array, Int8Array, Int8Array);
for (let v2 = 0; v2 < 250; v2++) {
    v2++;
    const v4 = v2--;
    const o5 = {
    };
    const v6 = o5.constructor;
    v6.freeze(o5);
    v6.assign(o5, v4);
}
gc();
