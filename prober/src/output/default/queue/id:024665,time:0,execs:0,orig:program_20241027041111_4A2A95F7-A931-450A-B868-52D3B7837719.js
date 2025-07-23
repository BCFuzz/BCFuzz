const v1 = Array();
function f2(a3) {
    const v4 = Array(a3);
    const o5 = {
        "c": v4,
    };
    return o5;
}
const v8 = [f2,f2(f2())];
const v10 = [v1,v8,[v8]];
const o11 = {
    "f": v10,
};
JSON.stringify([o11.g,o11]);
gc();
