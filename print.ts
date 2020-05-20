import { encode } from "https://deno.land/std/encoding/utf8.ts"

export function print(...args: string[]) {
    let out_str = args.join(" ");
    Deno.stdout.writeSync(encode(out_str));
}

export function println(...args: string[]) {
    print(...args);
    print('\n');
}
