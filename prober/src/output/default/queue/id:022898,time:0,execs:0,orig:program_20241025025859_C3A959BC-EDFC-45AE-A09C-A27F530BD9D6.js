function f1() {
    return 1024;
}
const v3 = [1024,1024,1024];
v3.toString = f1;
const v4 = [5.0,0.15731719625813334];
v4.maximum = 61336;
v4.minimum = v3;
const t8 = this.WebAssembly.Memory;
const v8 = new t8(v4);
v8.grow(v3);
gc();
