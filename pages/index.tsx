"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Card, CardContent } from "@/components/ui/card"

import { Button } from '@/components/ui/button'

import Image from "next/image"

import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
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

      {/* Latest Publications */}
      <section className="py-24 px-4 bg-blue-500">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <div className="bg-black p-4 w-fit mb-4 mt-20">
                <h2 className="text-2xl font-bold text-white">LATEST PUBLICATIONS</h2>
              </div>
            </div>
            <Link href={"/publications"}>
            <Button className="text-xl mt-4 cursor-pointer md:mt-0 bg-white text-black border-4 border-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
               View All Publications <span className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                    <a href="https://arxiv.org/abs/2405.17378" className="hover:underline hover:text-blue-600" target="blank">Rtl-repo: A benchmark for evaluating llms on large-scale rtl design projects</a>
                  </h3>
                  <p className="text-sm mt-2">
                    <a target="_blank" href="https://github.com/0xallam" className="hover:underline hover:text-blue-600">Allam, A.</a>,{" "}
                    <a target="_blank" href="https://scholar.google.com.eg/citations?view_op=list_works&hl=en&hl=en&user=E4nxRX0AAAAJ" className="hover:underline hover:text-blue-600">Shalan, M.</a>
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="bg-yellow-300 px-2 py-1 font-bold text-sm">
                    2024 IEEE LLM Aided Design Workshop (LAD)
                  </span>
                  <span className="text-sm mt-1">June 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                   <a target="blank" href="https://ieeexplore.ieee.org/document/9531753" className="hover:underline hover:text-blue-600"> Digital asic implementation of risc-v: Openlane and commercial approaches in comparison</a>
                  </h3>
                  <p className="text-sm mt-2">
                    <a target="_blank" href="https://github.com/Sarah-Hesham-2022" className="hover:underline hover:text-blue-600">Hesham, S.</a>,{" "}
                    <a target="_blank" href="https://scholar.google.com.eg/citations?view_op=list_works&hl=en&hl=en&user=E4nxRX0AAAAJ" className="hover:underline hover:text-blue-600">Shalan, M.</a>,{" "}
                    <a target="_blank" href="https://eng.asu.edu.eg/staff/watheq.elkharashi" className="hover:underline hover:text-blue-600">Watheq El-Kharashi, M.</a>,{" "}
                    <a target="_blank" href="https://scholar.google.com/citations?user=pukEdt4AAAAJ&hl=en" className="hover:underline hover:text-blue-600">Dessouky, M.</a>
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="bg-yellow-300 px-2 py-1 font-bold text-sm">
                    2021 IEEE International Midwest Symposium on Circuits and Systems (MWSCAS)
                  </span>
                  <span className="text-sm mt-1">August 2021</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold"><a href="https://ieeexplore.ieee.org/document/9336682" className="hover:underline hover:text-blue-600" target="blank"> Real silicon using open-source EDA</a></h3>
                  <p className="text-sm mt-2">
                    <a target="_blank" href="https://github.com/RTimothyEdwards" className="hover:underline hover:text-blue-600">Timothy Edwards, R.</a>,{" "}
                    <a target="_blank" href="https://scholar.google.com.eg/citations?view_op=list_works&hl=en&hl=en&user=E4nxRX0AAAAJ" className="hover:underline hover:text-blue-600">Shalan, M.</a>,{" "}
                    <a target="_blank" href="https://www.linkedin.com/in/mkkassem/" className="hover:underline hover:text-blue-600">Kassem, M.</a>
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="bg-yellow-300 px-2 py-1 font-bold text-sm">IEEE Design & Test</span>
                  <span className="text-sm mt-1">January 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Research Areas */}
    <section className="py-24 px-4">
        <div className="container mx-auto mt-20">
          <div className="text-center mb-16">
            <div className="bg-blue-500 p-2 w-fit mx-auto mb-4">
              <h2 className="text-2xl font-bold">RESEARCH AREAS</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "TinyML",
                description: "Optimizing machine learning models for ultra-low-power microcontrollers and edge devices.",
                color: "bg-pink-500",
              },
              {
                title: "EDA",
                description: "Advancing electronic design automation tools for efficient chip design and verification.",
                color: "bg-green-500",
              },
              {
                title: "Digital ASIC",
                description: "Designing custom digital application-specific integrated circuits for high-performance tasks.",
                color: "bg-purple-500",
              },
              {
                title: "Low Power Computing",
                description: "Creating energy-efficient computing architectures for embedded and mobile systems.",
                color: "bg-orange-500",
              }
              
            ].map((area, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] transition-all hover:-translate-y-2"
              >
                <div className={`h-8 ${area.color}`}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="mb-4">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="bg-orange-500 p-2 w-fit mx-auto mb-4">
              <h2 className="text-2xl font-bold">OUR TEAM</h2>
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

          <div className="mt-12 text-center">
            <Button className="text-lg px-8 py-6 bg-black text-white border-4 border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
              <Link href="/members"> Meet The Full Team </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-green-500">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-black p-2 w-fit mb-4">
                <h2 className="text-2xl font-bold text-white">GET IN TOUCH</h2>
              </div>
              <p className="text-xl mb-8 max-w-xl">
                Interested in our research or potential collaborations? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 border-2 border-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-icon lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p>
                      SSE 2105
                      <br />
                      American University in Cairo
                      <br />
                      Cairo 11835, Egypt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 border-2 border-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p>mshalan(at)aucegypt.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AUC Open Hardware Lab</h3>
              <p>Pushing the boundaries of Open Source Hardware.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-yellow-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/members" className="hover:text-yellow-300">
                    Members
                  </Link>
                </li>
                <li>
                  <Link href="/publications" className="hover:text-yellow-300">
                    Publications
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-gray-700 text-center">
            <p>© {new Date().getFullYear()} AUC Open Hardware Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "hover:bg-accent block text-main-foreground select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-hidden transition-colors hover:border-border",
            className,
          )}
          {...props}
        >
          <div className="text-base font-heading leading-none">{title}</div>
          <p className="font-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
ListItem.displayName = "ListItem"
ListItem.defaultProps = {
  className: "",
}