const v1 = [2147483648,2147483648,2147483648];
const v2 = [v1,v1];
const v5 = new Int16Array(512);
function f6() {
    const v8 = [Reflect,Reflect,Reflect];
    const v9 = v1.at;
    try { v9(2147483648); } catch (e) {}
    return Reflect.apply(v9, v2, v8);
}
v5.sort(f6);
gc();
