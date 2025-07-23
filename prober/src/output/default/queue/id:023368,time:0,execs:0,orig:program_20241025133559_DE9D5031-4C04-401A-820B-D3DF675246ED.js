const v1 = Array(Array);
function f2(a3) {
    const o4 = {
        [v1]: v1,
        "b": a3,
    };
    return o4;
}
const v6 = f2(f2(Array));
JSON.parse(JSON.stringify([v6.g,v6]));
gc();
