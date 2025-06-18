"use client";

import { JSX } from "react";
import Image from "next/image";
import { Article } from "@/types";
import Link from "next/link";

interface AuthorsInfoProps {
   article: Article;
}

export function AuthorsInfo({ article }: AuthorsInfoProps): JSX.Element {
   return (
      <div className="bg-secondary/20 py-8 px-6 md:px-12 xl:px-16 w-full flex flex-col gap-8 rounded-2xl">
         <div>
            <h3 className="h3 mb-4 text-accent">Escrito por:</h3>
            <div className="w-[4.625rem] h-[0.1875rem] bg-accent rounded-3xl mb-4"></div>
            {article.author.map((author) => {
               return (
                  <div
                     key={author.name}
                     className="flex items-center gap-8 border-b border-accent pb-8"
                  >
                     <Image
                        src={author.img_avatar}
                        alt=""
                        width={72}
                        height={72}
                        className="rounded-full"
                     />
                     <div>
                        <div className="flex flex-col gap-2">
                           <h4 className="text-lg font-medium text-accent">
                              {author.name}
                           </h4>
                           <div className="flex gap-4">
                              {author.social.map((social, index) => {
                                 return (
                                    <Link
                                       href={social.path}
                                       key={index}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       aria-label={`Visitar perfil do Autor ${author.name}`}
                                    >
                                       <Image
                                          src={social.icon}
                                          width={20}
                                          height={20}
                                          alt="Icone redes sociais"
                                       />
                                    </Link>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
