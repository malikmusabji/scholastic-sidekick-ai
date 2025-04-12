
import React from "react";
import { getRandomItem, wordsOfTheDay } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const WordOfTheDay = () => {
  const [wordData, setWordData] = React.useState(getRandomItem(wordsOfTheDay));
  const { toast } = useToast();

  const refreshWord = () => {
    const newWord = getRandomItem(wordsOfTheDay.filter(w => w.word !== wordData.word));
    setWordData(newWord);
    toast({
      title: "Word refreshed",
      description: `Today's new word is "${newWord.word}"!`,
      duration: 2000,
    });
  };

  return (
    <Card className="dashboard-card h-full">
      <CardHeader className="dashboard-card-header pb-2 flex-row justify-between items-center">
        <CardTitle className="dashboard-card-title flex items-center gap-2">
          <BookOpen size={18} className="text-primary" />
          <span>Word of the Day</span>
        </CardTitle>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={refreshWord}
          className="h-8 w-8"
          title="Get a new word"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-medium text-primary mb-1">
          {wordData.word}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          {wordData.definition}
        </p>
        <p className="text-sm italic">"{wordData.example}"</p>
      </CardContent>
    </Card>
  );
};

export default WordOfTheDay;
