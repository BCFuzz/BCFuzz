const v0 = [-6,16,3,48630,-3444,7,1024];
for (let v1 = 0; v1 < 10; v1++) {
    const v3 = new Proxy(v0, v0);
    const v4 = new Proxy(v3, v3);
    v4.concat(v3);
}
gc();
