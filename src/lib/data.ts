
// Mock data for demonstration purposes

export type Task = {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  completed: boolean;
  priority: "low" | "medium" | "high";
  course?: string;
};

export type Course = {
  id: string;
  name: string;
  code: string;
  instructor: string;
  color: string;
};

export type ScheduleItem = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  course?: string;
  type: "class" | "study" | "meeting" | "exam";
};

export type GradeItem = {
  id: string;
  title: string;
  score: number;
  totalPoints: number;
  type: "assignment" | "quiz" | "exam" | "project";
  course: string;
  date: Date;
};

export type Resource = {
  id: string;
  title: string;
  url: string;
  icon: string; // Lucide icon name
};

// Tasks
export const tasks: Task[] = [
  {
    id: "task1",
    title: "Complete Math Assignment",
    description: "Chapter 5, problems 1-20",
    dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    completed: false,
    priority: "high",
    course: "MATH201",
  },
  {
    id: "task2",
    title: "Read History Chapter",
    description: "Pages 125-150",
    dueDate: new Date(new Date().setDate(new Date().getDate() + 2)),
    completed: false,
    priority: "medium",
    course: "HIST101",
  },
  {
    id: "task3",
    title: "Prepare Science Presentation",
    description: "Research on renewable energy",
    dueDate: new Date(new Date().setDate(new Date().getDate() + 5)),
    completed: false,
    priority: "high",
    course: "SCI302",
  },
  {
    id: "task4",
    title: "Submit English Essay Draft",
    dueDate: new Date(new Date().setDate(new Date().getDate() + 3)),
    completed: false,
    priority: "medium",
    course: "ENG210",
  },
  {
    id: "task5",
    title: "Practice Piano",
    description: "Prepare for recital",
    dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    completed: false,
    priority: "low",
  },
];

// Courses
export const courses: Course[] = [
  {
    id: "MATH201",
    name: "Advanced Mathematics",
    code: "MATH201",
    instructor: "Dr. Johnson",
    color: "bg-blue-500",
  },
  {
    id: "HIST101",
    name: "World History",
    code: "HIST101",
    instructor: "Prof. Smith",
    color: "bg-green-500",
  },
  {
    id: "SCI302",
    name: "Environmental Science",
    code: "SCI302",
    instructor: "Dr. Garcia",
    color: "bg-purple-500",
  },
  {
    id: "ENG210",
    name: "Modern Literature",
    code: "ENG210",
    instructor: "Prof. Wilson",
    color: "bg-pink-500",
  },
  {
    id: "CS105",
    name: "Introduction to Programming",
    code: "CS105",
    instructor: "Dr. Tech",
    color: "bg-yellow-500",
  },
];

// Today's schedule
export const todaySchedule: ScheduleItem[] = [
  {
    id: "schedule1",
    title: "Advanced Mathematics",
    startTime: "09:00",
    endTime: "10:30",
    location: "Science Hall 301",
    course: "MATH201",
    type: "class",
  },
  {
    id: "schedule2",
    title: "Study Session",
    startTime: "11:00",
    endTime: "12:30",
    location: "Library",
    type: "study",
  },
  {
    id: "schedule3",
    title: "World History",
    startTime: "13:30",
    endTime: "15:00",
    location: "Humanities Building 102",
    course: "HIST101",
    type: "class",
  },
  {
    id: "schedule4",
    title: "Club Meeting",
    startTime: "16:00",
    endTime: "17:00",
    location: "Student Center",
    type: "meeting",
  },
];

// Grades
export const grades: GradeItem[] = [
  {
    id: "grade1",
    title: "Midterm Exam",
    score: 87,
    totalPoints: 100,
    type: "exam",
    course: "MATH201",
    date: new Date(new Date().setDate(new Date().getDate() - 10)),
  },
  {
    id: "grade2",
    title: "Research Paper",
    score: 92,
    totalPoints: 100,
    type: "assignment",
    course: "HIST101",
    date: new Date(new Date().setDate(new Date().getDate() - 5)),
  },
  {
    id: "grade3",
    title: "Lab Report",
    score: 78,
    totalPoints: 100,
    type: "assignment",
    course: "SCI302",
    date: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
  {
    id: "grade4",
    title: "Quiz 3",
    score: 95,
    totalPoints: 100,
    type: "quiz",
    course: "ENG210",
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    id: "grade5",
    title: "Coding Assignment",
    score: 88,
    totalPoints: 100,
    type: "assignment",
    course: "CS105",
    date: new Date(),
  },
];

// Quick links
export const quickLinks: Resource[] = [
  {
    id: "link1",
    title: "Library",
    url: "#",
    icon: "book",
  },
  {
    id: "link2",
    title: "Course Management",
    url: "#",
    icon: "folder",
  },
  {
    id: "link3",
    title: "Email",
    url: "#",
    icon: "mail",
  },
  {
    id: "link4",
    title: "Student Portal",
    url: "#",
    icon: "user",
  },
  {
    id: "link5",
    title: "Academic Calendar",
    url: "#",
    icon: "calendar",
  },
];

// Motivational quotes
export const quotes = [
  "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The mind is not a vessel to be filled, but a fire to be kindled. - Plutarch",
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing. - Pele",
  "The roots of education are bitter, but the fruit is sweet. - Aristotle",
  "The only person who is educated is the one who has learned how to learn and change. - Carl Rogers",
  "The difference between school and life? In school, you're taught a lesson and then given a test. In life, you're given a test that teaches you a lesson. - Tom Bodett",
  "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence. - Abigail Adams",
  "I'm still learning. - Michelangelo",
  "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
];

// Words of the day
export const wordsOfTheDay = [
  {
    word: "Ephemeral",
    definition: "Lasting for a very short time",
    example: "The beauty of cherry blossoms is ephemeral, lasting only a few days each year.",
  },
  {
    word: "Serendipity",
    definition: "The occurrence of fortunate discoveries by accident",
    example: "Finding my favorite book at a garage sale was a wonderful serendipity.",
  },
  {
    word: "Tenacity",
    definition: "The quality of being determined to do something",
    example: "Her tenacity helped her overcome numerous obstacles in her research.",
  },
  {
    word: "Ubiquitous",
    definition: "Being present everywhere at the same time",
    example: "Smartphones have become ubiquitous in modern society.",
  },
  {
    word: "Paradigm",
    definition: "A typical example or pattern of something",
    example: "The discovery led to a new paradigm in scientific thinking.",
  },
];

// Helper function to get a random item from an array
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Helper function to get today's date formatted
export function getTodayFormatted(): string {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date().toLocaleDateString(undefined, options);
}

// Helper function to get upcoming events (within next 7 days)
export function getUpcomingEvents(): { title: string; date: Date; type: string }[] {
  return [
    {
      title: "Math Quiz",
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      type: "exam",
    },
    {
      title: "Science Project Due",
      date: new Date(new Date().setDate(new Date().getDate() + 3)),
      type: "assignment",
    },
    {
      title: "Student Council Meeting",
      date: new Date(new Date().setDate(new Date().getDate() + 5)),
      type: "meeting",
    },
    {
      title: "Field Trip",
      date: new Date(new Date().setDate(new Date().getDate() + 7)),
      type: "event",
    },
  ];
}
