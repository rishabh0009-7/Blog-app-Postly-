import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "../utils/db";
import { BlogPostCard } from "@/components/general/BlogPostCard";

async function getData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.postly.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function DashboardRoute() {
  const { getUser} = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/register");
  }
// why we use get user instead of isauthenticated coz ye boolean dega but we want user id 
  const data = await getData(user.id);

  return (
    <div>
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-medium">Your Blog Articles</h2>

      <Link className={buttonVariants()} href="/dashboard/create">
        Create Post
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
       
      ))}
    </div>
  </div>
    
  );

}