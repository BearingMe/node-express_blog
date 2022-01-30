import type { Response } from "express";

export function getAbout(_: any, res: Response): void {
  const options = {
    title: "About",
  }
  
  res.render("about", options);
  return;
}
