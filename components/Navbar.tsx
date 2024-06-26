"use client";
import { SEO } from "@/utils/company";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeSwitcher";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Projects", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  // @ts-ignore
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:justify-start sm:items-center">
                <div className="flex flex-shrink-0 items-center">
                  <a href={"/"}>
                    <Image
                      src={SEO.logo_light}
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Button variant={"outline"}>
                          <a href={item.href}>{item.name}</a>
                        </Button>
                      </div>
                      // <a
                      //   key={item.name}
                      //   href={item.href}
                      //   className={classNames(
                      //     item.current
                      //       ? "bg-gray-900 text-white"
                      //       : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      //     "rounded-md px-3 py-2 text-sm font-medium"
                      //   )}
                      //   aria-current={item.current ? "page" : undefined}
                      // >
                      //   {item.name}
                      // </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <ModeToggle />
                  </div>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                // <div key={item.name}>{item.name}</div>
                <Button
                  key={item.name}
                  variant={"outline"}
                  //@ts-ignore
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white ",
                    "block rounded-md px-3 py-2 text-base font-medium hover:underline hover:underline-offset-4 decoration-blue-300 decoration-2 "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
