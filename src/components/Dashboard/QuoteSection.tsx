
import React from "react";
import { getRandomItem, quotes } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  const [quote, setQuote] = React.useState<string>(getRandomItem(quotes));

  // Split the quote from the author
  const [quoteText, author] = quote.split(" - ");

  return (
    <Card className="dashboard-card">
      <CardContent className="pt-6 flex items-start">
        <Quote className="mr-2 text-primary h-5 w-5 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-foreground italic">{quoteText}</p>
          {author && (
            <p className="text-sm text-muted-foreground mt-1">— {author}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteSection;
