// Word Wrap kata — refactor this file so it reads like a top-down narrative.
export function wrap(s: string, n: number): string[] {
    const a = s.split(' ');
    const r: string[] = [];
    let c = '';
    for (const x of a) {
        if (c === '') { c = x; }
        else if (c.length + 1 + x.length <= n) { c += ' ' + x; }
        else { r.push(c); c = x; }
    }
    if (c !== '') { r.push(c); }
    return r;
}
