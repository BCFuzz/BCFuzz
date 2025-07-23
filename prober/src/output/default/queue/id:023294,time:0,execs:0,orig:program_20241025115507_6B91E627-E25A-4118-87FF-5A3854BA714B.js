const v0 = [];
const v1 = [v0,v0];
const v4 = new Int16Array(512);
function f5() {
    const v7 = [512];
    const v8 = v0.at;
    Reflect.apply(v8, v1, v7);
    return v8;
}
v4.sort(f5);
gc();
