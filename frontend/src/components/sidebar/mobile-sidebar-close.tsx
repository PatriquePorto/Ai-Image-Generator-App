"use client"

import { X } from "lucide-react"
import { useSidebar } from "../ui/sidebar"
import { Button } from "../ui/button"

export default function MobileSidebarClose() {
    const { setOpenMobile, isMobile } = useSidebar()

    if (!isMobile) {
        return null
    }
    return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenMobile(false)}
          className="ml-56 hover:bg-muted/50 h-8 w-8 p-0"
          aria-label="Close sidebar"
        >
            <X className="h-4 w-4" />
        </Button>
    )
}
