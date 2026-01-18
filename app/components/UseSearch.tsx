"use client";

import { SearchContext } from "./SearchProvider";
import { useContext } from "react";
export function useSearch() {
  const context = useContext(SearchContext);
  console.log("context:", context);
  if (!context) {
    console.log("error");
    throw new Error("There is error");
  }
  return context;
}
