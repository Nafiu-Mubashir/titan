// import * as  yup from "yup";

import { Modal, Input, PasswordInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Button from "../button";
import { Apple, Facebook, Google } from "iconsax-react";

const Login = () => {
  const loginOptions = [
    {
      icon: <Facebook size="16" color="white" variant="Bold" />,
      social: "facebook",
    },
    {
      icon: <Google size="16" color="" className="stroke-red-500 dark:stroke-white fill-red-500 dark:fill-white" variant="Bold" />,
      social: "google",
    },
    {
      icon: <Apple size="16" color="white" variant="Bold" />,
      social: "apple",
    },
  ];
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size={"md"}
        title="Sign in to Rumble"
        centered
        radius={15}
        // withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.8,
        }}
        classNames={{
          header: 'dark:bg-rumble-dark dark:text-white',
          title: "!font-bold !text-2xl",
          close: "!stroke-black dark:!stroke-white dark:hover:bg-rumble-dark",
          content: 'dark:!bg-rumble-dark dark:text-white'
        }}
      >
        <div className="w-full space-y-4">
          <p className="text-[0.9rem] text-center lg:text-left">
            If you have a Rumble account, please enter your credentials.
          </p>

          <Input
            placeholder="Email or Username"
            classNames={{
              input: "border-gray-200 focus:ring-gray-200 focus:border-gray-200 dark:bg-gray-700 dark:border-none",
            }}
            size="md"
            radius={0}
          />
          <PasswordInput
            placeholder="Password"
            classNames={{
              input: "border-gray-200 focus:ring-gray-200 focus:border-gray-200 dark:bg-gray-700 dark:border-none",
              innerInput:
                "border-gray-200 focus:ring-none focus:border-gray-200",
            }}
            size="md"
            radius={0}
          />
          <div className="flex gap-3 justify-center items-center border-b dark:border-gray-700 py-2 lg:p-4">
            <Button value="Sign in" classes="bg-blue-500 py-3 px-5 dark:bg-gray-300 dark:text-black text-white" />
            <a href="/" className="font-semi-bold">
              Forgot your password?
            </a>
          </div>

          <div className="border-b dark:border-gray-700 p-4 space-y-3">
            <p className="text-center">Alternatively, sign in with:</p>
            <div className="flex gap-3 justify-center items-center">
              {loginOptions.map(({ icon, social }, id) => (
                <button
                  className={`flex gap-2 items-center dark:text-white dark:bg-rumble-dark dark:border dark:border-rumble-green first:bg-blue-500 even:border even:border-gray-300 last:bg-black text-white even:text-black py-1 px-3 rounded-full text-[0.6rem] lg:text-[0.83rem] capitalize`}
                  key={id}
                >
                  {icon}
                  {social}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:p-4 space-y-2  text-center">
            <p className="">Don't have a Rumble account yet?</p>
            <a href="/" className="font-bold">
              Create one now!
            </a>
          </div>
        </div>
      </Modal>

      <Button
        onClick={open}
        value="Sign in"
        classes="border-0 lg:py-2 hover:bg-gray-100 dark:hover:bg-gray-700 outline-none"
      />
    </>
  );
};
export default Login;
