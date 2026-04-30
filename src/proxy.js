import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
        
    // console.log('hello i ammmmmm',request, 'this is request from proxyyyyyyyyyyyyyyy')
  // const iaLoggedIn = true;

    const session = await auth.api.getSession({
        headers: await headers()
    })
  
    console.log('sesssssssssssssssss',  session, ' this is sessionnnnnnnnnnnnnnnnn')

  if(!session){

      return NextResponse.redirect(new URL('/login', request.url))
}
return NextResponse.next()

}
 
 
export const config = {
  matcher: ['/about', '/carrier', '/news/:path*'],

//   :path*    etar maddome mean kore j eta  dynamic  could be /:id* or any thing
}