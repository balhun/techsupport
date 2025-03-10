import { Container, Stack, Typography, Link, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";

export default function RespFooter() {
  const [showFooter, setShowFooter] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    const Scroll = () => {
      if (!isLargeScreen) {
        setShowFooter(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", Scroll);
    return () => window.removeEventListener("scroll", Scroll);
  }, [isLargeScreen]);

  //Mivel a gombok egy Link nem lehet sima tailwindel szerkeszteni. cssben kell.

  return (
    <footer className={`bottom-0 left-0 w-full  bg-gray-900 text-white transition-transform duration-300 ease-in-out ${isLargeScreen || showFooter ? "translate-y-0" : "translate-y-full"}`}>
      <Container maxWidth="full" className="py-4 justify-between">
        <Stack direction="row" spacing={4} justifyContent="space-between" alignItems="center">
          <Stack direction="column" spacing={1} >
            <Typography variant="body2" className="text-gray-400">Github Repók</Typography>
            <Stack direction={!isLargeScreen ? "column" : "row"} spacing={2}>
              <Link href="https://github.com/balhun/techsupport" target="_blank" rel="noopener"  className="text-gray-300 hover:text-gray-100 flex items-center"><GitHubIcon className="mr-1" />Front End</Link>
              <Link href="https://github.com/YoSlurP/TechBackend" target="_blank" rel="noopener" className="text-gray-300 hover:text-gray-100 flex items-center" ><GitHubIcon className="mr-1" />Back End</Link>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={1} alignItems="center" className="right-3">
            <Typography variant="body2" className="text-gray-400 text-center   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">Powered by Kandó's Tech™ <br /> © 2025 All rights reserved.</Typography>
          </Stack>
          <Stack direction="column" spacing={1} alignItems="flex-end">
            <Typography variant="body2" className="text-gray-400">Gyors link</Typography>
            <div className="block md:flex text-right md:gap-2">
              <div><Link href="/about" className="text-gray-300 hover:text-gray-100">Rólunk</Link></div>
            </div>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}
