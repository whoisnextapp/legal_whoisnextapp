import { locales } from 'nextra/locales'
import { NextResponse } from 'next/server'

/**
 * Nextra locales middleware, .pdf/.doc/.docx gibi statik indirmeleri .tr/.en rewrite
 * ettiği için 404 üretiyordu (public/ altındaki dosyalar locale suffix alıyordu).
 * İndirilebilir belgeleri locale işleminden muaf tutuyoruz (nextra'nın jpeg/png vb.
 * için yaptığıyla aynı mantık).
 */
export function middleware(request) {
  if (/\.(pdf|docx?)$/i.test(request.nextUrl.pathname)) {
    return NextResponse.next()
  }
  return locales(request)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|logo.png|og-image.png).*)'
  ]
}
