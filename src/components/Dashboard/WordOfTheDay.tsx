
import React from "react";
import { getRandomItem, wordsOfTheDay } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const WordOfTheDay = () => {
  const [wordData, setWordData] = React.useState(getRandomItem(wordsOfTheDay));

  return (
    <Card className="dashboard-card h-full">
      <CardHeader className="dashboard-card-header pb-2">
        <CardTitle className="dashboard-card-title flex items-center gap-2">
          <BookOpen size={18} className="text-primary" />
          <span>Word of the Day</span>
        </CardTitle>
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
