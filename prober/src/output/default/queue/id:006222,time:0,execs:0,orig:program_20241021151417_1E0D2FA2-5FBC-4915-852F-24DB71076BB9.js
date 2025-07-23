const v2 = new Proxy([1073741824,-26526], Proxy);
const o3 = {
    ...v2,
};
gc();
