import React, { ReactElement } from "react";
import ArticlesView from "../view";

export default async function ArticlesController(): Promise<ReactElement> {
   return <ArticlesView />;
}
