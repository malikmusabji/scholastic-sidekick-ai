
import React from "react";
import { grades } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart } from "lucide-react";

const GradeOverview = () => {
  // Calculate overall average grade
  const calculateOverallAverage = () => {
    if (grades.length === 0) return 0;
    
    const totalPoints = grades.reduce((sum, grade) => {
      return sum + (grade.score / grade.totalPoints) * 100;
    }, 0);
    
    return totalPoints / grades.length;
  };

  const overallAverage = calculateOverallAverage();

  // Calculate grades by course
  const calculateCourseAverages = () => {
    const courseGrades: Record<string, { sum: number; count: number }> = {};
    
    grades.forEach((grade) => {
      if (!courseGrades[grade.course]) {
        courseGrades[grade.course] = { sum: 0, count: 0 };
      }
      
      courseGrades[grade.course].sum += (grade.score / grade.totalPoints) * 100;
      courseGrades[grade.course].count += 1;
    });
    
    return Object.entries(courseGrades).map(([course, data]) => ({
      course,
      average: data.sum / data.count,
    }));
  };

  const courseAverages = calculateCourseAverages();

  // Get letter grade from percentage
  const getLetterGrade = (percentage: number) => {
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
  };

  // Grade color based on performance
  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600 dark:text-green-400";
    if (percentage >= 80) return "text-blue-600 dark:text-blue-400";
    if (percentage >= 70) return "text-yellow-600 dark:text-yellow-400";
    if (percentage >= 60) return "text-orange-600 dark:text-orange-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <Card className="dashboard-card h-full">
      <CardHeader className="dashboard-card-header">
        <CardTitle className="dashboard-card-title">Grades Overview</CardTitle>
        <div className="flex gap-2">
          <button className="text-primary">
            <AreaChart size={18} />
          </button>
          <button className="text-muted-foreground">
            <BarChart size={18} />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Overall Average
          </h3>
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-2 text-primary">
              {overallAverage.toFixed(1)}%
            </div>
            <div className={`text-xl ${getGradeColor(overallAverage)}`}>
              {getLetterGrade(overallAverage)}
            </div>
          </div>
          <div className="w-full h-2 bg-muted rounded-full mt-2">
            <div
              className="h-2 bg-primary rounded-full"
              style={{ width: `${overallAverage}%` }}
            />
          </div>
        </div>

        <h3 className="text-sm font-medium text-muted-foreground mb-2">
          By Course
        </h3>
        <div className="space-y-3">
          {courseAverages.map((item) => (
            <div key={item.course}>
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm">{item.course}</div>
                <div className="text-sm font-medium">
                  <span className={getGradeColor(item.average)}>
                    {item.average.toFixed(1)}% ({getLetterGrade(item.average)})
                  </span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full">
                <div
                  className="h-1.5 bg-primary rounded-full"
                  style={{ width: `${item.average}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeOverview;
