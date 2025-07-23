const v2 = ["d","d","d","d","d"];
const v3 = [v2,"valueOf"];
const v4 = ["d",v2];
const o5 = {
    __proto__: v4,
    10000: v4,
    ...v3,
};
const v7 = new Uint16Array(o5, Uint16Array, v4);
v7[o5];
gc();
