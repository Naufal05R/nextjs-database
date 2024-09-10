import Stars from "../Stars";
import { Card, CardContent } from "../../ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ReviewView() {
  return (
    <Card>
      <CardContent className="grid gap-4 p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Jared Palmer</h3>
            <div className="flex items-center gap-0.5">
              <Stars rating={4} />
            </div>
          </div>
        </div>
        <p>
          I absolutely love this t-shirt! The quality is fantastic and the
          design is so unique. Its quickly become one of my favorite pieces.
        </p>
      </CardContent>
    </Card>
  );
}
