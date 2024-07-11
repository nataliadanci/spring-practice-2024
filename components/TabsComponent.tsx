import * as Tabs from "@radix-ui/react-tabs";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const TabsComponent = () => {
  return (
    <Tabs.Root className="bg-white" defaultValue="tab1">
      <Tabs.List>
        <div className="flex justify-center items-center p-4">
          <Tabs.Trigger
            className="px-2 py-2 w-40 h-8 flex-row items-center gap-1 p-1 text-xs font-semibold rounded border-[0.1px] data-[state=active]:text-black data-[state=active]:border-black data-[state=inactive]:text-gray-400 data-[state=inactive]:border-gray-300"
            value="tab1"
          >
            Înregistrează-te
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-2 py-2 w-40 h-8 flex-row items-center gap-1 p-1 text-xs font-semibold rounded border-[0.1px] data-[state=active]:text-black data-[state=active]:border-black data-[state=inactive]:text-gray-400 data-[state=inactive]:border-gray-300"
            value="tab2"
          >
            Logare
          </Tabs.Trigger>
        </div>
      </Tabs.List>
      <Tabs.Content value="tab1" className="flex items-center justify-center">
        <RegisterForm />
      </Tabs.Content>
      <Tabs.Content value="tab2" className="flex items-center justify-center">
        <LoginForm />
      </Tabs.Content>
    </Tabs.Root>
  );
};
