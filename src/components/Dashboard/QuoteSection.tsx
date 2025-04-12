
import React from "react";
import { getRandomItem, quotes } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const QuoteSection = () => {
  const [quote, setQuote] = React.useState<string>(getRandomItem(quotes));
  const { toast } = useToast();

  // Split the quote from the author
  const [quoteText, author] = quote.split(" - ");

  const refreshQuote = () => {
    const newQuote = getRandomItem(quotes.filter(q => q !== quote));
    setQuote(newQuote);
    toast({
      title: "Quote refreshed",
      description: "You've got a new quote to inspire you!",
      duration: 2000,
    });
  };

  return (
    <Card className="dashboard-card">
      <CardContent className="pt-6 flex items-start justify-between">
        <div className="flex items-start">
          <Quote className="mr-2 text-primary h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-foreground italic">{quoteText}</p>
            {author && (
              <p className="text-sm text-muted-foreground mt-1">— {author}</p>
            )}
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={refreshQuote}
          className="flex-shrink-0"
          title="Get a new quote"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuoteSection;
