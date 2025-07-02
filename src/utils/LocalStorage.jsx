import { stringify } from "postcss";

const employees = [
  {
    name: "Asha Mehta",
    email: "asha.mehta@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile Q2 sales figures into a summary report.",
        taskDate: "2025-07-03",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting Follow-up",
        taskDescription: "Send notes and deliverables to client post meeting.",
        taskDate: "2025-06-29",
        category: "Client Relations",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Website Update",
        taskDescription: "Fix broken links in company blog section.",
        taskDate: "2025-06-25",
        category: "IT",
      },
    ],
  },
  {
    name: "Rahul Jain",
    email: "rahul.jain@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Onboard New Developer",
        taskDescription:
          "Introduce the new dev to the tech stack and workflow.",
        taskDate: "2025-07-02",
        category: "HR",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review Sprint",
        taskDescription: "Review PRs from frontend team before deployment.",
        taskDate: "2025-07-04",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Bash",
        taskDescription: "Fix as many high-priority bugs as possible.",
        taskDate: "2025-06-30",
        category: "QA",
      },
    ],
  },
  {
    name: "Nikita Sharma",
    email: "nikita.sharma@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Logo Variants",
        taskDescription: "Create alternate logo layouts for mobile view.",
        taskDate: "2025-07-03",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Print Marketing Flyers",
        taskDescription: "Generate marketing materials for product launch.",
        taskDate: "2025-06-28",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Branding Workshop",
        taskDescription: "Host workshop to align branding efforts.",
        taskDate: "2025-06-26",
        category: "Team Building",
      },
    ],
  },
  {
    name: "Amit Patel",
    email: "amit.patel@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Inventory Audit",
        taskDescription: "Audit office inventory and update ledger.",
        taskDate: "2025-07-01",
        category: "Operations",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Vendor Payment",
        taskDescription: "Ensure last month's invoices are paid.",
        taskDate: "2025-06-30",
        category: "Finance",
      },
    ],
  },
  {
    name: "Fatima Qureshi",
    email: "fatima.qureshi@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Research Market Trends",
        taskDescription: "Analyze trends for the upcoming fiscal year.",
        taskDate: "2025-07-05",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Internal Survey",
        taskDescription: "Send out and analyze team satisfaction surveys.",
        taskDate: "2025-06-28",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Budget Plan Draft",
        taskDescription: "Prepare initial draft of department budgets.",
        taskDate: "2025-06-25",
        category: "Finance",
      },
    ],
  },
];
const admin = [
  {
    email: "admin123@gmail.com ",
    password: 123,
  },
];
export const setlocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getlocalStorage = () => {
  const employees= JSON.parse(localStorage.getItem("employees"));
  const admin= JSON.parse(localStorage.getItem("admin"));
  console.log(employees)
  console.log(admin)
  
};
