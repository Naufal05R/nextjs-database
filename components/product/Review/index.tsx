import Stars from "../Stars";
import { Card, CardContent } from "../../ui/card";

import { Review } from "@prisma/client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ReviewView({ review }: { review: Review }) {
  const splittedName = review.name.split(" ");
  const initials = splittedName.map((name) => name[0]).join("");
  const altName = splittedName.join("").toLowerCase();

  return (
    <Card>
      <CardContent className="grid gap-4 p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage alt={`@${altName}`} src="/placeholder-avatar.jpg" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{review.name}</h3>
            <div className="flex items-center gap-0.5">
              <Stars rating={review.rating} />
            </div>
          </div>
        </div>
        <p>
          {review.content}
        </p>
      </CardContent>
    </Card>
  );
}
