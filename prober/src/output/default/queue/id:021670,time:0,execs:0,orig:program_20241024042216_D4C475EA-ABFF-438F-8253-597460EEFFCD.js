const v1 = ["-13","-13","-13"];
function f2() {
    return f2;
}
Object.defineProperty(v1, 9, { enumerable: true, get: f2 });
const o3 = {
};
const v5 = new Proxy(v1, o3);
v5[9] = "-13";
gc();
