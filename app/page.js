import { Button } from "@/components/ui/button";
import getRecipies from "@/lib/recip"
export default async function Home() {
  const recipies = await getRecipies();
    return (
      <div className="xl:px-24 px-10">
        <div className="my-12">
          <BadgeFilter />
          <RecipeList recipes={recipes} />
        </div>
      </div>
    );
 
}
