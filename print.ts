import { encode } from "https://deno.land/std/encoding/utf8.ts"

export async function print(...args: string[]) {
    let out_str = args.join(" ");
    await Deno.stdout.write(encode(out_str));
}

export async function println(...args: string[]) {
    await print(...args);
    await print('\n');
}
