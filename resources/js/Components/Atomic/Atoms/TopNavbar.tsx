import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/Atomic/Atoms/ApplicationLogo";
import NavLink from "@/Components/Atomic/Atoms/NavLink";
import route from "ziggy-js";
import Dropdown from "@/Components/Atomic/Atoms/Dropdown";

export const TopNavbar: React.FC<{ auth: any }> = ({ auth }) => (
    <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                        <InertiaLink href="/">
                            <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                        </InertiaLink>
                    </div>

                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink href={route("dashboard")} active={route().current("dashboard")}>
                            今日の予定
                        </NavLink>
                    </div>
                </div>

                <div className="flex items-center sm:ml-6">
                    <div className="ml-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("logout")} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);
