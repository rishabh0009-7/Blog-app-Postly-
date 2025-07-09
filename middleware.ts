// adding middleware using kinde 
// if hum chaht ahai ki  db se pehle ek baar check ho ki user authenticated hai ya nhi to beech mai middleware hai jo check karega and agar nhi hai to register page pe bhej dega 
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware() {
  },
  {
    // Middleware still runs on all routes, but doesn't protect the public route
    // ye vo hai jisme middleware nhi lagna  iske alaewa sab middleware se protected rahega 
    publicPaths: ["/"],
  }
);

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
}