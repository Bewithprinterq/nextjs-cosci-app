/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Features05PageProps = {
  courses: any[]
}
// const courses = [
//   {
//     icon: Goal,
//     title: "Identify Opportunities",
//     description:
//       "Easily uncover untapped areas to explore and expand your reach effortlessly.",
//   },
//   {
//     icon: BookCheck,
//     title: "Build Authority",
//     description:
//       "Create valuable content that resonates, inspires trust, and positions you as an expert.",
//   },
//   {
//     icon: ChartPie,
//     title: "Instant Insights",
//     description:
//       "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
//   },
//   {
//     icon: Users,
//     title: "Engage with Your Audience",
//     description:
//       "Boost audience engagement with interactive features like polls, quizzes, and forms.",
//   },
//   {
//     icon: FolderSync,
//     title: "Automate Your Workflow",
//     description:
//       "Streamline your processes by automating repetitive tasks, saving time and reducing effort.",
//   },
//   {
//     icon: Zap,
//     title: "Accelerate Growth",
//     description:
//       "Supercharge your growth by implementing strategies that drive results quickly and efficiently.",
//   },
// ];

const Features05Page = ({courses}: Features05PageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
          รายการหลักสูตรฟรีที่เปิดสอน
        </h2>
        <div className="mt-8 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none"
            >
              <CardHeader>
                <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                  {course.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {course.detail}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                {course.picture}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05Page;
