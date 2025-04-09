"use client";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"  
  import Image from "next/image"
import Head from "next/head";

export default function Members() {
    return (
        <>
        <Head>
            <title>AUCOHL Members</title>
        </Head>
        <NavigationMenu className="fixed left-1/2 transform -translate-x-1/2 z-50 mt-4 sm:mt-8 md:mt-12 max-w-[90%] sm:max-w-[75%] md:max-w-[80%] lg:max-w-none">
            <NavigationMenuList className="flex gap-6 sm:gap-12 md:gap-16 lg:gap-30 w-auto">
                <NavigationMenuItem>
                <Link href="/">
                    <Image
                    src="/orange.png"
                    alt="Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto max-w-full sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto mx-auto p-3"
                    />
                </Link>
                </NavigationMenuItem>
                    <div className="flex">
                    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <Link href="/members">
                        Members
                    </Link>          
                    </NavigationMenuItem>
                    <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                    <Link href="/publications">
                        Publications
                    </Link>
                    </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
                </NavigationMenu>

        {/* Team Section */}
              <section className="py-24 px-4">
                <div className="container mx-auto mt-24">
                  <div className="text-center mb-16">
                    <div className="bg-orange-500 p-2 w-fit mx-auto mb-4">
                      <h2 className="text-2xl font-bold">Current Members</h2>
                    </div>
                  </div>
        
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        name: "Dr. Mohamed Shalan",
                        role: "Lab Director",
                        image: "/shalan-250.png?height=400&width=400",
                      },
                      {
                        name: "Manar Abdelaty",
                        role: "Senior Researcher",
                        image: "/manar.jpeg?height=400&width=400",
                      },
                      {
                        name: "Mohamed Gaber",
                        role: "Senior Researcher",
                        image: "/mohamedGaber.png?height=400&width=400",
                      },
                      {
                        name: "Ahmed Allam",
                        role: "ML Research Lead",
                        image: "/ahmed.jpeg?height=400&width=400",
                      },
                      {
                        name: "Aly Youssef",
                        role: "Research Associate",
                        image: "/aly.jpeg?height=400&width=400",
                      },
                    ].map((member, index) => (
                      <div key={index} className="group">
                        <div className="relative mb-4">
                          <div className="absolute -top-3 -left-3 w-full h-full rounded-xl"></div>
                          <div className="relative z-10 border-4 border-black rounded-xl overflow-hidden">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              width={400}
                              height={400}
                              className="w-full h-auto object-cover aspect-square"
                            />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p>{member.role}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-12 mb-16">
                    <div className="bg-orange-500 p-2 w-fit mx-auto mb-4">
                      <h2 className="text-2xl font-bold">Past Members</h2>
                    </div>
                  </div>
                </div>
              </section>
        </>
    );
}