import { FC } from 'react';
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {BillboardClient} from "./components/client"

interface OverviewPageProps {

}

const OverviewPage: FC<OverviewPageProps> = async ({  }) => {
    const { userId } = auth();
    if (!userId) {
        redirect("/sign-in");
    }
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient/>
      </div>
    </div>
  );
};

export default OverviewPage;
