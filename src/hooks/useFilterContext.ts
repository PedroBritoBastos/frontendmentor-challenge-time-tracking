"use client";

import { useContext } from "react";
import { Context } from "../context/filterContext";

export function useFilterContext() {
  const value = useContext(Context);
  return value;
}
