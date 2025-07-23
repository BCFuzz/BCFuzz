const v1 = new Int32Array();
const v2 = v1.sort;
Date.toString = Date;
([v2,10000n,Date]).join(v2).localeCompare(Date);
gc();
