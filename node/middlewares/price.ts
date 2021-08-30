export async function price(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { price },
  } = ctx

  const data = await price.getPrice('3')
  ctx.body = data

  await next()
}
